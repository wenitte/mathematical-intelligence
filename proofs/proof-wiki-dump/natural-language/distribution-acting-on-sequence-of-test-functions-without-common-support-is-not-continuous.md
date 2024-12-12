# 

Source: https://proofwiki.org/wiki/Distribution_acting_on_Sequence_of_Test_Functions_without_common_Support_is_not_Continuous

Theorem
Let $T \in \map {\DD'} \R$ be a distribution.
Let $\sequence {\phi_n}_{n \mathop \in \N} \in \map \DD \R$ be a sequence of test functions.
Suppose $\sequence {\phi_n}_{n \mathop \in \N}$ does not have the common compact support.

Then $T$ acting on $\sequence {\phi_n}_{n \mathop \in \N}$ is not continuous.


Proof
Let $\operatorname {III} \in \map {\DD'} \R$ be the Dirac comb.
Let $\mathbf 0 : \R \to 0$ be the zero mapping.
Let $\phi \in \map \DD \R$ be a test function with compact support $K = \closedint 0 1$ such that:

$\forall x \in K : \map \phi x > 0$
Let $\phi_n \in \map \DD \R$ be a test function sequence such that:

$\ds \forall x \in \R : \forall n \in \N : \map {\phi_n} x = \frac 1 n \map \phi {\frac x n}$
We have that:

$\ds \forall n \in \N : \map {\phi_{n + 1} } n = \frac 1 {n + 1} \map \phi {\frac n {n + 1} } > 0$
Thus, with each $n$ we generate a new test function with a larger support.
By taking the $k$th derivative of $\map {\phi_n} x$ and applying the chain rule we get that:

$\ds \forall k \in \N : \map {\phi_n^{\paren k} } x = \frac 1 {n^{k + 1}} \map {\phi^{\paren k} } {\frac x n}$
Hence:














\(\ds \sup_{x \mathop \in \R} \size {\map {\phi_n^{\paren k} } x - 0}\)

\(=\)







\(\ds \sup_{x \mathop \in \R} \size {\frac 1 {n^k} \map {\phi^{\paren k} } x}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {n^k} \sup_{x \mathop \in \R} \size {\map {\phi^{\paren k} } x}\)




















\(\ds \)

\(=\)







\(\ds \frac {M_k} {n^k}\)





$\ds M_k := \sup_{x \mathop \in \R} \size {\map {\phi^{\paren k} } x} \in \R_{> 0}$



Fix $k \in \N$.
Let $\epsilon \in \R_{\mathop > 0}$.
Let $N \in \R$ be such that $\ds \frac {M_k}{N^k} < \epsilon$.
Then:

$\ds \forall n \in \N : n \ge N \implies \frac {M_k}{n^k} \le \frac {M_k}{N^k} < \epsilon$
Altogether:

$\ds \forall \epsilon \in \R_{\mathop > 0} : \exists N \in \R : \forall n \in \N : n \ge N \implies \sup_{x \mathop \in \R} \size {\map {\phi_n^{\paren k} } x - 0} \le \frac {M_k}{n^k} \le \frac {M_k}{N^k} < \epsilon$
Hence, as $n \rightarrow \infty$ we get that $\phi_n^{\paren k}$ converges to $\mathbf 0$ uniformly. 
However:














\(\ds \map T {\phi_n}\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \map {\phi_n} k\)





Definition of Dirac Comb














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \frac 1 n \map \phi {\frac k n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = - \infty}^{- 1} \frac 1 n \map \phi {\frac k n} + \sum_{k \mathop = 0}^n \frac 1 n \map \phi {\frac k n} + \sum_{k \mathop = n}^\infty \frac 1 n \map \phi {\frac k n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \frac 1 n \map \phi {\frac k n}\)





Definition of Support of Continuous Real-Valued Function



We have that Test Function is Riemann Integrable.
Let the subdivision of the interval $\closedint 0 1$ be normal:

$\ds \forall i \in \N_{\mathop \le n} : x_{i + 1} - x_i = \frac 1 n$
Then $\map T {\phi_n}$ is a Riemann sum with $\ds \Delta x_k = \frac 1 n$, $\ds c_k = \frac k n$, $x_0 = 0$ and $x_n = 1$.
Taking $n \to \infty$ yields:

$\ds \map T {\phi_n} \stackrel {n \mathop \to \infty} \longrightarrow \int_0^1 \map \phi x \rd x$
However, we assumed that:

$\forall x \in K : \map \phi x > 0$
Thus:

$\ds \int_0^1 \map \phi x \rd x > 0$
So we have that, as $n \to \infty$, $\sequence {\phi_n}$ converges to $\mathbf 0$ uniformly, but $\map T {\phi_n}$ does not converge to $0$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.1$: A glimpse of distribution theory. Test functions, distributions, and examples




