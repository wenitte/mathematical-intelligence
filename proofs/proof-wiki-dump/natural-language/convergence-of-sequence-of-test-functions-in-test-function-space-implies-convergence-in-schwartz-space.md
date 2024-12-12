# 

Source: https://proofwiki.org/wiki/Convergence_of_Sequence_of_Test_Functions_in_Test_Function_Space_implies_Convergence_in_Schwartz_Space

Theorem
Let $\map \DD \R$ be the test function space.
Let $\map \SS \R$ be the Schwartz space.
Let $\sequence {\phi_n}_{n \mathop \in \N}$ be a sequence of test functions in $\map \DD \R$.
Let $\mathbf 0 : \R \to 0$ be the zero mapping.
Suppose $\sequence {\phi_n}$ converges to $\mathbf 0$ in $\map \DD \R$:

$\phi_n \stackrel \DD \longrightarrow \mathbf 0$

Then $\sequence {\phi_n}$ converges to $\mathbf 0$ in $\map \SS \R$:

$\phi_n \stackrel \SS \longrightarrow \mathbf 0$


Proof
For all $n \in \N$ let $\phi_n$ be a test function.
By definition, $\phi_n$ has a compact support $I_n \subset \R$:

$\forall x \notin I_n \implies \map {\phi_n} x = 0$
Let:

$a \in \R : a > 0 : \forall n \in \N : I_n \subseteq \closedint {-a} a$
Then:














\(\ds \forall m,k \in \N : \sup_{x \mathop \in \R} \size {x^k \map {\phi^{\paren m}_n} x}\)

\(=\)







\(\ds \map {\sup_{\size x \mathop \le a} } {\size x^k \size {\map {\phi^{\paren m}_n} x} }\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds a^k \sup_{\size x \mathop \le a} \size {\map {\phi^{\paren m}_n} x}\)









Suppose:

$\phi_n \stackrel \DD \longrightarrow \mathbf 0$
Then all derivatives of $\phi_n$ on $\closedint {-a} a$ converge uniformly to $\mathbf 0$.
Hence:














\(\ds \lim_{n \mathop \to \infty} \sup_{x \mathop \in \R} \size {x^k \map {\phi^{\paren m}_n} x}\)

\(\le\)







\(\ds a^k \lim_{n \mathop \to \infty} \sup_{\size x \mathop \le a} \size {\map {\phi^{\paren m}_n} x}\)




















\(\ds \)

\(=\)







\(\ds a^k \sup_{\size x \mathop \le a} \size {\mathbf 0}\)





$\phi_n \stackrel \DD \longrightarrow \mathbf 0$














\(\ds \)

\(=\)







\(\ds a^k \cdot 0\)




















\(\ds \)

\(=\)







\(\ds 0\)










This page needs the help of a knowledgeable authority.In particular: passing the limit through supremumIf you are knowledgeable in this area, then you can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Help}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
In other words:

$\ds \forall m,k \in \N :  \lim_{n \mathop \to \infty} \sup_{x \mathop \in \R} \size {x^k \map {\phi^{\paren m}_n} x} = 0$
By definition:

$\phi_n \stackrel \SS \longrightarrow \mathbf 0$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.5$: A glimpse of distribution theory. Fourier transform of (tempered) distributions




