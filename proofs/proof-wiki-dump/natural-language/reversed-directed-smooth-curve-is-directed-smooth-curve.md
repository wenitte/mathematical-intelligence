# 

Source: https://proofwiki.org/wiki/Reversed_Directed_Smooth_Curve_is_Directed_Smooth_Curve

Theorem
Let $C$ be a directed smooth curve in $\C$.
Let $C$ be parameterized by the smooth path $\gamma: \left[{a \,.\,.\, b}\right] \to \C$.

Define $\psi: \left[{a \,.\,.\, b}\right] \to \left[{a \,.\,.\, b}\right]$ by $\psi \left({t}\right) = a + b - t$.
Define $\rho: \left[{a \,.\,.\, b}\right] \to \C$ by $\rho = \gamma \circ \psi$.

Then $\rho$ is a smooth path which parameterizes a directed smooth curve $-C$.
The directed smooth curve $-C$ is independent of the parameterization $\gamma$.


Proof
First, we prove that $\rho$ is a smooth path:














\(\ds \rho' \left({t}\right)\)

\(=\)







\(\ds \gamma' \left({\psi\left({t}\right) }\right) \psi' \left({t}\right)\)





Derivative of Complex Composite Function














\(\ds \)

\(=\)







\(\ds -\gamma' \left({\psi\left({t}\right) }\right)\)





Derivatives of Function of $a x + b$: $\psi' \left({t}\right) = -1$














\(\ds \)

\(\ne\)







\(\ds 0\)





Definition of Smooth Path: $\gamma' \left({\psi\left({t}\right)}\right) \ne 0$



As $\gamma'$ is continuously differentiable, and $\psi$ is continuous, it follows that $\rho'$ is continuous.
Then $\rho$ is a parameterization of a directed smooth curve $-C$. 
$\Box$

Next, we prove that the definition of $-C$ is independent of the parameterization $\gamma$.
Suppose $\sigma$ is another parameterization of $C$:

$\sigma = \gamma \circ \phi$
Here $\phi: \left[{c \,.\,.\, d}\right] \to \left[{a \,.\,.\, b}\right]$ is a bijective differentiable strictly increasing function.
Define $\tilde \psi: \left[{c \,.\,.\, d}\right] \to \left[{c \,.\,.\, d}\right]$ by $\tilde \psi \left({t}\right) = c + d - t$.
Define $\tilde \rho: \left[{c \,.\,.\, d}\right] \to \C$ by $\tilde \rho = \sigma \circ \tilde{\psi}$.
We now prove that $\rho$ and $\tilde \rho$ both are parameterizations of the same directed smooth curve $-C$.
Both $\psi$ and $\tilde \psi$ are bijective with $\psi^{-1} = \psi$ and $\tilde \psi^{-1} = \tilde \psi$.
Define $\tilde \phi: \left[{c \,.\,.\, d}\right] \to \left[{a \,.\,.\, b}\right]$ by $\tilde \phi = \psi^{-1} \circ \phi \circ \tilde \psi$.
From Composite of Bijections is Bijection, it follows that $\tilde \phi$ is bijective.
From Derivative of Composite Function, it follows that $\tilde \phi$ is differentiable with














\(\ds \tilde \phi' \left({t}\right)\)

\(=\)







\(\ds \dfrac 1 {\psi' \left({\psi^{-1} \left({\phi \left({\tilde \psi \left({t}\right) }\right) }\right) }\right) } \phi' \left({\tilde \psi \left({t}\right) }\right) \tilde \psi' \left({t}\right)\)





Derivative of Inverse Function














\(\ds \)

\(=\)







\(\ds \phi' \left({\tilde \psi \left({t}\right)}\right)\)





Derivatives of Function of $a x + b$














\(\ds \)

\(>\)







\(\ds 0\)





Derivative of Monotone Function



From Derivative of Monotone Function, it follows that $\tilde \phi$ is strictly increasing.
As:

$\rho \circ \tilde \phi = \gamma \circ \psi \circ \psi^{-1} \circ \phi \circ \tilde \psi = \gamma \circ \phi \circ \tilde \psi = \sigma \circ \tilde \phi = \tilde \rho$
it follows that $\rho$ and $\tilde{\rho}$ are parameterizations of $-C$.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




