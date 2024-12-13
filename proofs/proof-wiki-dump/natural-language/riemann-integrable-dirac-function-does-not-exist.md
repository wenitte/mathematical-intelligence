# 

Source: https://proofwiki.org/wiki/Riemann_Integrable_Dirac_Function_does_not_Exist

Theorem
Let $\delta : \R \to \R$ be a real function.
Let $\phi : \R \to \R$ be a smooth function vanishing outside $\closedint a b$.
Let $a \in \R_{> 0}$ be a real number.
Suppose $\delta$ is Riemann integrable on $\closedint {-a} a$.
Suppose for every $\phi$ we have that:

$\ds \int_{-a}^a \map \delta x \map \phi x = \map \phi 0$

Then $\delta$ does not exist.


Proof
Aiming for a contradiction, suppose $\delta$ exists.
Let $\phi$ be a test function of the following form:

$\map \phi x = \begin {cases} \map \exp {\dfrac 1 {x^2 - 1} } & : \size x < 1 \\ 0 & : \size x \ge 1 \end {cases}$
Let $n \in \N$ be a natural number.
Let $\phi_n : \R \to \R$ be a real function such that:

$\forall n \in N : \forall x \in \R : \map {\phi_n} x := \map \phi {n x}$
Then $\map \phi {nx}$ is smooth, vanishes outside $\ds \closedint {- \frac 1 n} {\frac 1 n}$ and:

$\forall x \in \R : 0 \le \map \phi {nx} \le 1$
Hence:














\(\ds \frac 1 e\)

\(=\)







\(\ds \map {\phi_n} 0\)




















\(\ds \)

\(=\)







\(\ds \int_{-\frac 1 n}^{\frac 1 n} \map \delta x \map \phi {nx} \rd x\)




















\(\ds \)

\(\le\)







\(\ds \int_{-\frac 1 n}^{\frac 1 n} \paren {\sup_{x \mathop \in \closedint {-\frac 1 n} {\frac 1 n} } \map \delta x} \cdot 1 \rd x\)





Riemann Integrable Function is Bounded














\(\ds \)

\(=\)







\(\ds \paren {\sup_{x \mathop \in \closedint {-\frac 1 n} {\frac 1 n} } \map \delta x} \frac 2 n\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 e\)

\(\le\)







\(\ds \paren {\sup_{x \mathop \in \closedint {-1} 1} \map \delta x} \lim_{n \mathop \to \infty} \frac 2 n\)





taking the limit $n \to \infty$ of both sides














\(\ds \)

\(=\)







\(\ds 0\)









This is a contradiction.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.1$: A glimpse of distribution theory. Test functions, distributions, and examples




