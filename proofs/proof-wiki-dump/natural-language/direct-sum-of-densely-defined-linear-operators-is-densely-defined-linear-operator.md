# 

Source: https://proofwiki.org/wiki/Direct_Sum_of_Densely-Defined_Linear_Operators_is_Densely-Defined_Linear_Operator

Theorem
Let $\family {\tuple {\HH_n, \innerprod \cdot \cdot_n} }_{n \mathop \in \N}$ be a sequence of Hilbert spaces over $\C$.
Let $\tuple {\HH, \innerprod \cdot \cdot}$ be the Hilbert space direct sum of $\family {\tuple {\HH_n, \innerprod \cdot \cdot_n} }_{n \mathop \in \N}$.
For each $n \in \N$, let $\tuple {\map D {T_n}, T_n}$ be a densely-defined linear operator. 
Define:

$\ds \map D T = \set {\sequence {\phi_n}_{n \mathop \in \N} \in \HH : \sum_{n \mathop = 1}^\infty \norm {T_n \phi_n}^2_{\HH_n} < \infty}$
Define $T : \map D T \to \HH$ by:

$\map T {\sequence {\phi_n}_{n \mathop \in \N} } = T_\phi$
for each $\phi = \sequence {\phi_n}_{n \mathop \in \N} \in \HH$, where $T_\phi \in \HH$ is such that:

$\map {T_\phi} n = T_n \phi_n$
for each $n \in \N$.

Then $\tuple {\map D T, T}$ be a densely-defined.


Proof
Let $\SS$ be the set of $f \in \HH$ such that:

there exists $N \in \N$ such that:
$\map f n = {\mathbf 0}_{\HH_n}$ for $n > N$.
For $\phi = \sequence {\phi_n}_{n \mathop \in \N} \in \SS$ and $N \in \N$ picked as a witness to the above condition, we have:

$\ds \sum_{n \mathop = 1}^\infty \norm {T_n \phi_n}_{\HH_n}^2 = \sum_{n \mathop = 1}^N \norm {T_n \phi_n}_{\HH_n}^2 < \infty$
Hence $\phi \in \map D T$.
So $\SS \subseteq \map D T$.
From Everywhere Dense Subset of Countable Hilbert Space Direct Sum in terms of Everywhere Dense Subsets of Summands, $\SS$ is everywhere dense in $\HH$.
Hence from Set Closure Preserves Set Inclusion, $\map D T$ is everywhere dense in $\HH$.
It remains to show that $T$ is linear.

Let $\phi = \sequence {\phi_n}_{n \mathop \in \N} \in \map D T$, $\psi = \sequence {\psi_n}_{n \mathop \in \N} \in \map D T$ and $\lambda \in \C$.
Then, for each $n \in \N$, we have:














\(\ds \map {T_{\phi + \lambda \psi} } n\)

\(=\)







\(\ds \map {T_n} {\phi_n + \lambda \psi_n}\)




















\(\ds \)

\(=\)







\(\ds T_n \phi_n + \lambda T_n \psi_n\)





$T_n$ is linear














\(\ds \)

\(=\)







\(\ds \map {T_\phi} n + \lambda \map {T_\psi} n\)









Hence we have:

$T_{\phi + \lambda \psi} = T_\phi + \lambda T_\psi$
Hence:

$\map T {\phi + \lambda \psi} = T \phi + \lambda T \psi$
So $T$ is linear.
$\blacksquare$





