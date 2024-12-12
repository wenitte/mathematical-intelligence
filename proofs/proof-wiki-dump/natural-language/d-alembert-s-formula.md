# 

Source: https://proofwiki.org/wiki/D%27Alembert%27s_Formula



Theorem
Let $t$ be time.
Let $x$ be position.
Let $\tuple {t, x} \stackrel u {\longrightarrow} \map u {t, x}: \R^2 \to \R$ be a twice-differentiable function in both variables. 
Let $x \stackrel \phi {\longrightarrow} \map \phi x: \R \to \R$ be a differentiable function. 
Let $x \stackrel \psi {\longrightarrow} \map \psi x: \R \to \R$ be a Riemann integrable function.
Let $c \in \R_{> 0}$ be a constant.

Then the solution to the partial differential equation:

$\dfrac {\partial^2} {\partial t^2} \map u {x, t} = c^2 \dfrac {\partial^2} {\partial x^2} \map u {x, t}$
with initial conditions:














\(\ds \map u {x, 0}\)

\(=\)







\(\ds \map \phi x\)




















\(\ds \valueat {\dfrac {\partial} {\partial t} \map u {x, t} } {t \mathop = 0}\)

\(=\)







\(\ds \map \psi x\)









is given by:

$\ds \map u {x, t} = \dfrac 1 2 \paren {\map \phi {x + c t} + \map \phi {x - c t} } + \dfrac 1 {2 c} \int_{x - c t}^{x + c t} \map \psi s \rd s$

The above solution formula is called d'Alembert's formula.


Proof
The general solution to the $1$-D wave equation:

$\dfrac {\partial^2} {\partial t^2} \map u {x, t} = c^2 \dfrac {\partial^2} {\partial x^2} \map u {x, t}$
is given by:

$\map u {x, t} = \map f {x + c t} + \map g {x - c t}$
where $f, g$ are arbitrary twice-differentiable functions.

From initial conditions we have:














\(\ds \map \phi x\)

\(=\)

\(\, \ds \map u {x, 0} \, \)

\(\, \ds = \, \)



\(\ds \map f x + \map g x\)




















\(\ds \map \psi x\)

\(=\)

\(\, \ds \valueat {\dfrac \partial {\partial t} \map u {x, t} } {t \mathop = 0} \, \)

\(\, \ds = \, \)



\(\ds c \map {f'} x - c \map {g'} x\)





Chain Rule for Partial Derivatives




So we have:














\(\ds \map {\phi'} x\)

\(=\)







\(\ds \map {f'} x + \map {g'} x\)





Sum Rule for Derivatives














\(\ds \dfrac {\map \psi x} c\)

\(=\)







\(\ds \map {f'} x - \map {g'} x\)










Solving the equations give:














\(\ds \map {f'} x\)

\(=\)







\(\ds \dfrac 1 2 \paren {\map {\phi'} x + \dfrac {\map \psi x} c}\)




















\(\ds \map {g'} x\)

\(=\)







\(\ds \dfrac 1 2 \paren {\map {\phi'} x - \dfrac {\map \psi x} c}\)










Integrating both equations and using Fundamental Theorem of Calculus:














\(\ds \map f x\)

\(=\)







\(\ds \dfrac 1 2 \map \phi x + \dfrac 1 {2 c} \int_0^x \map \psi s \rd s + A\)




















\(\ds \map g x\)

\(=\)







\(\ds \dfrac 1 2 \map \phi x - \dfrac 1 {2 c} \int_0^x \map \psi s \rd s + B\)









for some constants $A, B$.

From $\map \phi x = \map f x + \map g x$, we have $A + B = 0$. 
Therefore:














\(\ds \map u {x, t}\)

\(=\)







\(\ds \map f {x + c t} + \map g {x - c t}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \phi {x + c t} + \dfrac 1 {2 c} \int_0^{x + c t} \map \psi s \rd s + A + \dfrac 1 2 \map \phi {x - c t} - \dfrac 1 {2 c} \int_0^{x - c t} \map \psi s \rd s + B\)





substitution














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\map \phi {x + c t} + \map \phi {x - c t} } + \dfrac 1 {2 c} \int_{x - c t}^{x + c t} \map \psi s \rd s\)





simplification



$\blacksquare$


Source of Name
This entry was named for Jean le Rond d'Alembert.


Historical Note
Jean le Rond d'Alembert devised this solution to the $1$-dimensional wave equation in $1746$.


Sources
2008: Walter A. Strauss: Partial Differential Equations: An Introduction (2nd ed.): Chapter $2$: Waves and Diffusions
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




