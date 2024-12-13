# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_%2B_2y_%3D_cos_x

Theorem
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} + 2 y = \cos x$
has the general solution:

$y = \dfrac {2 \cos x + \sin x} 5 + C e^{-2 x}$


Proof
$(1)$ is a linear first order ODE in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = 2$
$\map Q x = \cos x$

Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int 2 \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^{2 x}\)










Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:














\(\ds \map {\dfrac {\d} {\d x} } {y e^{2 x} }\)

\(=\)







\(\ds e^{2 x} \cos x\)














\(\ds \leadsto \ \ \)





\(\ds y e^{2 x}\)

\(=\)







\(\ds \int e^{2 x} \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{2 x} \paren {2 \cos x + \sin x} } {2^2 + 1^2} + C\)





Primitive of Exponential of $e^{a x} \cos b x$ for $a = 2, b = 1$














\(\ds \)

\(=\)







\(\ds \frac {e^{2 x} \paren {2 \cos x + \sin x} } 5 + C\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {2 \cos x + \sin x} 5 + C e^{-2 x}\)









$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $3$




