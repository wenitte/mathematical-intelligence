# 

Source: https://proofwiki.org/wiki/Locally_Integrable_Function_defines_Distribution



Theorem
Let $f \in \map {L^1_{loc}} {\R^d}$ be a locally integrable function.
Let $\map \DD {\R^d}$ be the test function space.
Let $T_f : \map \DD {\R^d} \to \C$ be a mapping.

Then $T_f$ is a distribution.


Proof
Existence
Let $\phi \in \map \DD {\R^d}$ be a test function.
Let $T_f$ be defined as

$\ds T_f = \int_{\R^d} \map f {\mathbf x} \map \phi {\mathbf x} \rd \mathbf x$
By definition, $\phi$ has the compact support.
Together with the properties of $f$ we have that $T_f$ is bounded with respect to any compact range of integration.
$\Box$


Linearity
By Linear Combination of Integrals we have that $T_f$ is a linear mapping.
$\Box$


Continuity
By Convergent Sequence Minus Limit, we can shift the sequence to set its limit to zero.
Let $\mathbf 0 : \R^d \to 0$ be the zero mapping.
Let $\phi_n$ converge to $\mathbf 0$ in $\map \DD {\R^d}$:

$\phi_n \stackrel \DD {\longrightarrow} {\mathbf 0}$
Let $K \subseteq \R^d$ be the compact support of all $\phi_n$.














\(\ds \size {\map {T_f} {\phi_n} }\)

\(=\)







\(\ds \size {\int_{\R^d} \map f {\mathbf x} \map {\phi_n} {\mathbf x} \rd \mathbf x}\)




















\(\ds \)

\(\le\)







\(\ds \int_K \size {\map f {\mathbf x} } \size {\map {\phi_n} {\mathbf x} } \rd \mathbf x\)





Definition of Test Function, Definition of Locally Integrable Function














\(\ds \)

\(\le\)







\(\ds \norm {\phi_n}_\infty \int_K \size {\map f {\mathbf x} } \rd \mathbf x\)





Definition of Supremum Norm














\(\ds \)

\(\stackrel {n \mathop \to \infty} {\longrightarrow}\)







\(\ds 0\)





Convergence in test function space; Definition of Uniform Convergence



$\Box$

By definition, $T_f$ is a distribution.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.1$: A glimpse of distribution theory. Test functions, distributions, and examples




