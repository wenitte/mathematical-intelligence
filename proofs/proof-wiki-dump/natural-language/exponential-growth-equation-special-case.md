# 

Source: https://proofwiki.org/wiki/Exponential_Growth_Equation/Special_Case


It has been suggested that this page or section be merged into First Order ODE/dy = k y dx.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
All solutions of the differential equation $y' = y$ take the form $y = C e^x$.


Proof
Let $\map f x = C e^x$.
Then by Derivative of Exponential Function:

$\map {f'} x = \map f x$
From Exponential of Zero:

$\map f 0 = C$
Hence $C e^x$ is a solution of $y' = y$.

Now suppose that a function $f$ satisfies $\map {f'} x = \map f x$. 
Consider $\map h x = \map f x e^{-x}$.
By the Product Rule for Derivatives:














\(\ds \map {h'} x\)

\(=\)







\(\ds \map {f'} x e^{-x} - \map f x e^{-x}\)




















\(\ds \)

\(=\)







\(\ds \map f x e^{-x} - \map f x e^{-x}\)




















\(\ds \)

\(=\)







\(\ds 0\)









From Zero Derivative implies Constant Function, $h$ must be a constant function.
Therefore, $\map h x = \map h 0 = \map f 0$.
Recalling the definition of $h$, it follows that:

$\map f x = \map f 0 e^x$
$\blacksquare$


Sources
1967: Tom M. Apostol: Calculus Volume 1: $\S 8.1$




