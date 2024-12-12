# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Second_Chebyshev_Function



Theorem
The following definitions of the concept of Second Chebyshev Function are equivalent:

Definition 1
$\ds \forall x \in \R: \map \psi x := \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p$
where, for each $k$, the summation extends over all powers of prime numbers $p$ such that $p^k \le x$.

Definition 2
$\ds \forall x \in \R: \map \psi x := \sum_{1 \mathop \le n \mathop \le x} \map \Lambda n$
where $\Lambda$ is the von Mangoldt function.

Definition 3
$\ds \forall x \in \R: \map \psi x := \sum_{p \mathop \le x} \floor {\log_p x} \ln p$
where:

the summation extends over all prime numbers $p$ such that $p \le x$
$\floor {\, \cdot \,}$ denotes the floor function.


Proof
Definition 1 equivalent to Definition 2
The equivalence:

$\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p \equiv \sum_{1 \mathop \le n \mathop \le x} \map \Lambda n$
follows directly from the definition of the von Mangoldt function.


This article contains statements that are justified by handwavery.In particular: Nevertheless, a proof must be written downYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\Box$


Definition 1 equivalent to Definition 3
If $x < 2$, then: 

$\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p = \sum_{p \mathop \le x} \floor {\log_p x} \ln p = 0$
since the sums are empty.
So take $x \ge 2$. 
Consider the sum: 

$\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p$
This sum runs over the pairs of natural numbers $\tuple {k, p}$ such that $p$ is a prime number with $p^k \le x$. 
Equivalently, for each prime $p$, we sum over the natural numbers $k$ with $p^k \le x$. 
Since $p^k \le x$ implies that $p \le x$, such $k$ only exists if $p \le x$. 
Note that for a fixed prime number $p$, we have $p^k \le x$ if and only if:

$k \ln p \le \ln x$
by Logarithm of Power and Logarithm is Strictly Increasing.  
Since $p \ge 2$, this is equivalent to: 

$\ds k \le \frac {\ln x} {\ln p} = \log_p x$
So, we can equivalently sum $\ln p$ over the pairs of natural numbers $\tuple {p, k}$ such that $p \le x$ is a prime number and $k \le \log_p x$. 
That is: 














\(\ds \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p\)

\(=\)







\(\ds \sum_{p \mathop \le x} \sum_{k \mathop \le \log_p x} \ln p\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \le x} \ln p \paren {\sum_{k \mathop \le \log_p x} 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \le x} \floor {\log_p x} \ln p\)









for $x \ge 2$. 

Hence:

$\ds \forall x \in \R: \sum_{k \mathop \ge 1} \sum_{p^k \mathop \le x} \ln p = \sum_{p \mathop \le x} \floor {\log_p x} \ln p$
$\blacksquare$





