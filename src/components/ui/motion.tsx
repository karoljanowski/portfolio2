'use client'

import { motion } from 'framer-motion'

interface MotionProps {
    children: React.ReactNode
    className?: string
    id?: string
}

const Motion = ({children, className, id}: MotionProps) => {
    
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default Motion;