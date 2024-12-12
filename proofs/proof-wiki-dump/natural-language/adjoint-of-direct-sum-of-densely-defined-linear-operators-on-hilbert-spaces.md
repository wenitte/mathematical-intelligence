# 

Source: https://proofwiki.org/wiki/Adjoint_of_Direct_Sum_of_Densely-Defined_Linear_Operators_on_Hilbert_Spaces

Theorem
Let $\family {\tuple {\HH_n, \innerprod \cdot \cdot_{\HH_n} } }_{n \mathop \in \N}$ be a sequence of Hilbert spaces over $\C$.
Let $\tuple {\HH, \innerprod \cdot \cdot_\HH}$ be the Hilbert space direct sum of $\family {\tuple {\HH_n, \innerprod \cdot \cdot_n} }_{n \mathop \in \N}$.
For each $n \in \N$, let $\tuple {\map D {T_n}, T_n}$ be a densely-defined linear operator with adjoint $\tuple {\map D {T_n^\ast}, T_n^\ast}$. 
Let $\ds \tuple {\map D T,T}$ be the direct sum of $\sequence {\tuple {\map D {T_n}, T_n} }_{n \mathop \in \N}$ with adjoint $\tuple {\map D {T^\ast}, T^\ast}$.
Let $\ds \tuple {\map D {\bigoplus_{n \mathop = 1}^\infty T_n^\ast}, \bigoplus_{n \mathop = 1}^\infty T_n^\ast}$ be the direct sum of $\sequence {\tuple {\map D {T_n^\ast}, T_n^\ast} }_{n \mathop \in \N}$.

Then we have:

$\ds \tuple {\map D {T^\ast}, T^\ast} = \tuple {\map D {\bigoplus_{n \mathop = 1}^\infty T_n^\ast}, \bigoplus_{n \mathop = 1}^\infty T_n^\ast}$


Proof
For each $\psi = \sequence {\psi_n}_{n \mathop \in \N} \in \HH$, define $f_\psi : \map D T \to \C$ by:

$\map {f_\psi} \phi = \innerprod {T \phi} \psi_\HH$
for each $\phi \in \map D T$. 
Let $\ds \psi = \sequence {\psi_n}_{n \mathop \in \N} \in \map D {\bigoplus_{n \mathop = 1}^\infty T_n^\ast}$.
We have:














\(\ds \innerprod {T \phi} \psi_\HH\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \innerprod {T_n \phi_n} {\psi_n}_{\HH_n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \innerprod {\phi_n} {T_n^\ast \psi_n}_{\HH_n}\)





$\psi_n \in \map D {T_n^\ast}$ since $\ds \psi \in \map D {\bigoplus_{n \mathop = 1}^\infty T_n^\ast}$














\(\ds \)

\(=\)







\(\ds \innerprod \phi {\paren {\bigoplus_{n \mathop = 1}^\infty T_n^\ast} \psi}\)









Hence $f_\psi$ is a bounded linear functional.
Hence $\psi \in \map D {T^\ast}$.
Hence:

$\ds \map D {\bigoplus_{n \mathop = 1}^\infty T_n^\ast} \subseteq \map D {T^\ast}$
Further, by the uniqueness of the adjoint, we have that:

$\ds T^\ast \psi = \paren {\bigoplus_{n \mathop = 1}^\infty T_n^\ast} \psi$
for each $\ds \psi \in \map D {\bigoplus_{n \mathop = 1}^\infty T_n^\ast}$.

To finish we need to show that:

$\ds \map D {T^\ast} \subseteq \map D {\bigoplus_{n \mathop = 1}^\infty T_n^\ast}$
Let $\psi \in \map D {T^\ast}$.
From the definition of the adjoint, we want to show that $\psi_n \in \map D {T_n^\ast}$. 
We have that $f_\psi$ is a bounded linear functional.
Hence there exists $M > 0$ such that:

$\cmod {\map {f_\psi} \phi} \le M \norm \phi_\HH$
for each $\phi \in \map D T$.
We first need to show that $\psi_n \in \map D {T_n^\ast}$ for each $n \in \N$.
Let $\phi \in \map D {T_n}$.
Define $\phi^{(n)} \in \HH$ by:

$\map {\phi^{(n)} } n = \phi$
and:

$\map {\phi^{(n)} } k = {\mathbf 0}_{\HH_k}$ for $k \ne n$.
Then $\phi^{(n)} \in \map D T$. 
We then have:














\(\ds \cmod {\innerprod {T_n \phi} {\psi_n}_{\HH_n} }\)

\(=\)







\(\ds \cmod {\innerprod {T \phi^{(n)} } \psi_\HH}\)




















\(\ds \)

\(=\)







\(\ds \cmod {\map {f_\psi} {\phi^{(n)} } }\)




















\(\ds \)

\(\le\)







\(\ds M \norm {\phi^{(n)} }_\HH\)




















\(\ds \)

\(=\)







\(\ds M \sqrt {\norm \phi_{\HH_n}^2 + \sum_{k \mathop = 1, k \ne n}^\infty \norm { {\mathbf 0}_{\HH_k} }_{\HH_k}^2}\)




















\(\ds \)

\(=\)







\(\ds M \norm \phi_{\HH_n}\)









Hence $\psi_n \in \map D {T_n^\ast}$.
So $\ds \psi \in \map D {\bigoplus_{n \mathop = 1}^\infty T_n^\ast}$ as required.
$\blacksquare$





