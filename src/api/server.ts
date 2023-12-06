const token = '5d37a215e2c2f3c7250864b8f8a507e9ee40b94ddc55ce22'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://carapi-n9of.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        console.log(data)
        const response = await fetch(`https://carapi-n9of.onrender.com/api/car`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })
        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        console.log(id)
        console.log(data)
        const response = await fetch(`https://carapi-n9of.onrender.com/api/cars/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
               
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://carapi-n9of.onrender.com/api/cars/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
    
}