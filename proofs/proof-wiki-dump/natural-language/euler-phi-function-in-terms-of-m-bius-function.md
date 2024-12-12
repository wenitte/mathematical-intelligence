# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_in_terms_of_M%C3%B6bius_Function

Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Then:

$\ds \sum_{d \mathop \divides n} \map \mu d \frac n d = \map \phi n$
where:

$\ds \sum_{d \mathop \divides n}$ denotes the sum over all of the divisors of $n$
$\map \phi n$ is the Euler $\phi$ function, the number of integers less than $n$ that are prime to $n$
$\map \mu d$ is the Möbius function.

Equivalently, this says that:

$\phi = \mu * I_{\Z_{>0} }$
where:

$*$ denotes Dirichlet convolution
$I_{\Z_{>0} }$ denotes the identity mapping on $\Z_{>0}$, that is:
$\forall n \in \Z_{>0}: I_{\Z_{>0} }: n \mapsto n$

Work In ProgressIn particular: Add a link to a page proving this equivalence.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.


Proof
Sum of Möbius Function over Divisors says:

$\ds \sum_{d \mathop \divides n} \map \mu d = \floor {\frac 1 n}$
where $\floor {\dfrac 1 n}$ is the floor of $\dfrac 1 n$.
$\Box$

Let $\map 1 k = 1$ be the constant mapping.
Then $\phi$ is defined as:

$\ds \map \phi n = \sum_{\substack {k \mathop \perp n \\ 1 \mathop \le k \mathop \le n}} \map 1 k$
We have that $\floor {\dfrac 1 {\gcd \set {n, k} } }$ is $1$ if $k \perp n$ and $0$ otherwise.
Thus we can rewrite the above summation as:

$\ds \sum_{k \mathop = 1}^n \floor {\frac 1 {\gcd \set {n, k} } }$

Now we may use Sum of Möbius Function over Divisors, with $\gcd \set {n, k}$ replacing $n$, to get:














\(\ds \map \phi n\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\sum_{d \mathop \divides \gcd \set {n, k} } \map \mu d}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \sum_{\substack {d \mathop \divides n \\ d \mathop \divides k} } \map \mu d\)










For a fixed divisor $d$ of $n$, we must sum over all those $k$ in the range $1 \le k \le n$ which are multiples of $d$.
If we write $k = q d$, then $1 \le k \le n$ if and only if $1 \le q \le \dfrac n d$.  
Hence the last sum for $\map \phi n$ can be written as:














\(\ds \map \phi n\)

\(=\)







\(\ds \sum_{d \mathop \divides n} \paren {\sum_{q \mathop = 1}^{\tfrac n d} \map \mu d}\)




















\(\ds \)

\(=\)







\(\ds \sum_{d \mathop \divides n} \map \mu d \sum_{q \mathop = 1}^{\tfrac n d} \map 1 q\)




















\(\ds \)

\(=\)







\(\ds \sum_{d \mathop \divides n} \map \mu d \frac n d\)









$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 25 \beta$
1976: Tom M. Apostol: Introduction to Analytic Number Theory ... (previous) ... (next): $2.4$: A relation connected $\varphi$ and $\mu$




