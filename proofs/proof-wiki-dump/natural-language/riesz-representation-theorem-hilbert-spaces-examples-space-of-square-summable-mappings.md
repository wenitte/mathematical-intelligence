# 

Source: https://proofwiki.org/wiki/Riesz_Representation_Theorem_(Hilbert_Spaces)/Examples/Space_of_Square_Summable_Mappings

Example of Use of Riesz Representation Theorem (Hilbert Spaces)
Let $\map {\ell^2} \N$ be the space of square summable mappings on $\N$.
Let $N \in \N$.
Let $L_N: \map {\ell^2} \N \to \GF$ be defined by:

$\map {L_N} {\sequence{ a_n } } := a_N$
Let $\delta_N \in \map {\ell^2} \N$ be given by:

$\forall n \in \N: \paren{ \delta_N }_n = \begin{cases}
1 & n = N \\
0 & n \ne N
\end{cases}$

Then for all $a \in \map {\ell^2} \N$:

$\map {L_N} a = \innerprod a {\delta_N}$


Proof
By Space of Square Summable Mappings is Hilbert Space, $\map {\ell^2} \N$ is a Hilbert space.
Since for all $a \in \map {\ell^2} \N$:














\(\ds \cmod{ \map {L_n} a }\)

\(=\)







\(\ds \cmod{ a_N }\)




















\(\ds \)

\(=\)







\(\ds \sqrt{ \cmod{ a_N }^2 }\)




















\(\ds \)

\(\le\)







\(\ds \sqrt{ \sum_{n \mathop \in \N} \cmod{ a_n }^2 }\)




















\(\ds \)

\(=\)







\(\ds \norm a\)









it follows that $L_N$ is a bounded linear functional.

Hence the Riesz Representation Theorem (Hilbert Spaces) applies, so that there exists a unique $b \in \map {\ell^2} \N$ such that for all $a \in \map {\ell^2} \N$:

$\map {L_N} a = \innerprod a b$
Let us check that $\delta_N$ fulfils the claim:














\(\ds \innerprod a {\delta_N}\)

\(=\)







\(\ds \sum_{n \mathop \in \N} a_n \paren{ \delta_N }_n\)




















\(\ds \)

\(=\)







\(\ds a_N\)





since $\paren {\delta_N}_n = 0$ for $n \ne N$



The result follows.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 3.$ The Riesz Representation Theorem: Exercise $2$




