import prisma from '@/lib/prisma';

const authSeller = async (userId) => {
    try {
        if(!userId) return false

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { store: true },
        })

        if(!user) return false

        if(user.store) {
            if(user.store.status === 'approved') {
                return user.store.id
            }
            return false  // store exists but not approved yet
        }

        return false  // no store at all

    } catch (error) {
        console.error(error)
        return false
    }
}

export default authSeller