import { test, expect } from 'vitest'
import { sumar, restar, multiplicar, dividir } from './math.helper'
import { describe } from 'node:test'

describe('Prueba sumar', () => {
    test('Sumar dos números positivos', () => {
        // ! 1. Arrange (Preparar). Preparamos los datos
        const a = 10
        const b = 20
    
        // ! 2. Act (Actuar). Ejecutamos el código a testear
        const result = sumar(a, b)
    
        // ! 3. Assert (Afirmar). Verificamos que lo que esperamos es lo que realmente sucede
        expect(result).toBe(a + b)
    });

    test('Sumar número positivo y negativo', () => {
        const a = 2
        const b = -5

        const result = sumar(a, b)

        expect(result).toBe(a + b)
    })
})

describe('Prueba restar', () => {
    test('Restar dos números positivos', () => {
        const a = 10
        const b = 5
        
        const result = restar(a, b)

        expect(result).toBe(a - b)
    })

    test('Restar número positivo y negativo', () => {
        const a = 2
        const b = -5

        const result = restar(a, b)

        expect(result).toBe(a - b)
    })
})

describe('Prueba multiplicar', () => {
    test('Multiplicar dos números positivos', () => {
        const a = 5
        const b = 4

        const result = multiplicar(a, b)

        expect(result).toBe(a * b)
    })

    test('Multiplicar un número positivo y otro negativo', () => {
        const a = 8
        const b = -2

        const result = multiplicar(a, b)

        expect(result).toBe(a * b)
    })
})

describe('Prueba dividir', () => {
    test('Divide dos números positivos', () => {
        const a = 6
        const b = 2

        const result = dividir(a, b)

        expect(result).toBe(a / b)
    })
})