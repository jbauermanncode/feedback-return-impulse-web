import express from 'express'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'
import { NodemailerAdapter } from './adapters/nodemailer/nodemailer-adapter'

export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {

    
    try {
        const {type, comment, screenshot} = req.body
        const prismaFeedbackRepository = new PrismaFeedbacksRepository()
        const nodemailerMailAdapter = new NodemailerAdapter()
        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            prismaFeedbackRepository,
            nodemailerMailAdapter
        ) 
    
        await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot
        })
    
    
    
        return res.status(201).send()
        } catch (err){
            console.error(err)
            return res.status(500).send()
        }
    })
    