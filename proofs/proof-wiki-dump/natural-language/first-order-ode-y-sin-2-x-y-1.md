# 

Source: https://proofwiki.org/wiki/First_Order_ODE/y%27_%3D_sin%5E2_(x_-_y_%2B_1)

Theorem
The first order ODE:

$\dfrac {\d y} {\d x} = \map {\sin^2} {x - y + 1}^2$
has the general solution:

$\map \tan {x - y + 1} = x + C$


Proof
Make the substitution:

$z = x - y + 1$
Then from First Order ODE in form $y' = f (a x + b y + c)$ with $a = 1, b = - 1$:














\(\ds x\)

\(=\)







\(\ds \int \frac {\d z} {- \sin^2 z + 1}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d z} {\cos^2 z}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \sec^2 z \rd z\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \tan z + C_1\)





Primitive of $\sec^2 z$








\(\ds \leadsto \ \ \)





\(\ds \map \tan {x - y + 1}\)

\(=\)







\(\ds x + C\)





letting $C = - C_1$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $3 \ \text{(b)}$




