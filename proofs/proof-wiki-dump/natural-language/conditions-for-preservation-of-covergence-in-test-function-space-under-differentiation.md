# 

Source: https://proofwiki.org/wiki/Conditions_for_Preservation_of_Covergence_in_Test_Function_Space_under_Differentiation

Theorem
For all $n \in \N$ let $\Phi_n, \phi_n \in \map \DD \R$ be test functions.
Let $\mathbf 0 : \R \to 0$ be the zero mapping.
Let $\phi_n$ be such that:

$\ds \int_{-\infty}^\infty \map {\phi_n} x \rd x = 0$
Let $\Phi_n$ be such that $\Phi_n' = \phi_n$.
Let $\sequence {\Phi_n}_{n \mathop \in \N}$ and $\sequence {\phi_n}_{n \mathop \in \N}$ be sequences in $\map \DD \R$.
Suppose $\sequence {\phi_n}_{n \mathop \in \N}$ converges to $\mathbf 0$ in $\map \DD \R$.

Then $\sequence {\Phi_n}_{n \mathop \in \N}$ converges to $\mathbf 0$ in $\map \DD \R$ as well.


Proof
By Characterization of Derivative of Test Function we have that for every $\phi_n$ there is a unique $\Phi_n$ such that:

$\ds \map {\Phi_n} x = \int_{-\infty}^x \map {\phi_n} x \rd x$
Let $K = \closedint {-a} a$ be a closed real interval.
Suppose that $\sequence {\phi_n}_{n \mathop \in \N}$ is supported on $K$.
Hence:

$\forall n \in \N : \forall x \in \R \setminus K : \map {\phi_n} x = 0$
From assumption about $\phi_n$ it follows that:

$\forall n \in \N : \forall x \in \R \setminus K : \map {\Phi_n} x = 0$
Furthermore, for all $x \in \R$ we have that:














\(\ds \size {\map {\Phi_n} x}\)

\(=\)







\(\ds \size {\int_{-\infty}^x \map {\phi_n} x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds 2a \sup_{x \mathop \in \R} \size {\map {\phi_n} x}\)




















\(\ds \)

\(=\)







\(\ds 2 a \norm {\phi_n}_\infty\)





Definition of Supremum Norm



By assumption, $\sequence {\phi_n}$ converges to $\mathbf 0$ in $\map \DD \R$.
Hence, $\sequence {\phi_n}$ converges uniformly to $\mathbf 0$ on $\R$:

$\ds \forall \epsilon \in \R_{>0}: \exists N \in \R: \forall n \ge N: \sup_{x \mathop \in \R} \size {\map {\phi_n} x} < \epsilon$
Therefore:










\(\ds \forall x \in \R: \, \)



\(\ds \lim_{n \mathop \to \infty} \size {\map {\Phi_n} x}\)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} 2 a \norm {\phi_n}_\infty\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus, $\sequence {\map {\Phi_n} x}$ converges uniformly on $\R$ to $\mathbf 0$.
Since $\Phi'_n = \phi_n$, it follows that $\Phi_n^{\paren k} = \phi_n^{\paren {k - 1} }$ with $k \in \N_{>0}$.
Hence, for all $k \in \N_{> 0}$ we have that:














\(\ds \size {\map {\Phi^{\paren k}_n} x}\)

\(=\)







\(\ds \size {\map {\phi^{\paren {k - 1} } } x}\)




















\(\ds \)

\(\le\)







\(\ds \sup_{x \mathop \in \R} \size {\map {\phi^{\paren {k - 1} } } x}\)




















\(\ds \)

\(=\)







\(\ds \norm {\phi_n^{\paren {k - 1} } }_\infty\)





Definition of Supremum Norm



By assumption, $\sequence {\phi_n}$ converges to $\mathbf 0$ in $\map \DD \R$.
Hence, for all $k \in \N_{>0}$ we have that $\sequence {\phi_n^{\paren {k - 1} } }$ converges uniformly to $\mathbf 0$ on $\R$:

$\ds \forall k \in \N_{>0} : \forall \epsilon \in \R_{>0}: \exists N \in \R: \forall n \ge N: \sup_{x \mathop \in \R} \size {\map {\phi_n^{\paren k} } x} < \epsilon$
Then:










\(\ds \forall x \in \R : \forall k \in \N_{\mathop > 0}: \, \)



\(\ds \lim_{n \mathop \to \infty} \size {\map {\Phi_n^{\paren k } } x}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {\phi_n^{\paren {k - 1} } }_\infty\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence, for all $k \in \N_{>0}$ we have that $\sequence {\Phi_n^{\paren k} }$ converges uniformly to $\mathbf 0$ on $\R$.
By definition, $\sequence {\Phi_n}$ converges to $\mathbf 0$ in $\map \DD \R$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.1$: A glimpse of distribution theory. Test functions, distributions, and examples




