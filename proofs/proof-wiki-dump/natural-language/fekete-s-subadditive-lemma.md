# 

Source: https://proofwiki.org/wiki/Fekete%27s_Subadditive_Lemma



Theorem
Let $\sequence {a_n}_{n \mathop \ge 1}$ be a subadditive sequence.

Then:

$\ds \lim_{n \mathop \to \infty} \frac {a_n} n = \inf_{n \mathop \ge 1} \frac {a_n} n$


Proof
Let $k \ge 1$.
Let $n \ge 1$.
By Division Theorem, there exist $q \in \N$ and $r \in \set {0, 1, \ldots , k - 1}$ such that:

$n = k q + r$
Thus:














\(\ds \frac {a_n} n\)

\(=\)







\(\ds \frac {a_{k q + r} } n\)




















\(\ds \)

\(\le\)







\(\ds \frac {a_{k q} + a_r} n\)





Definition of Subadditive Sequence














\(\ds \)

\(=\)







\(\ds \frac {a_{\underbrace{k + \cdots + k}_q} + a_r} n\)




















\(\ds \)

\(\le\)







\(\ds \frac {q a_k + a_r} n\)





Definition of Subadditive Sequence














\(\ds \)

\(=\)







\(\ds \frac {q a_k} {k q + r} + \frac {a_r} n\)




















\(\ds \)

\(\le\)







\(\ds \frac {a_k} k + \frac {a_r} n\)




















\(\ds \)

\(\le\)







\(\ds \frac {a_k} k + \frac {\max \set {a_0, a_1, \ldots , a_{k - 1} } } n\)









By $n \to \infty$, we obtain:

$\ds \forall k \ge 1 : \limsup_{n \mathop \to \infty} \frac {a_n} n \le \frac {a_k} k$
In particular:

$\ds (1): \quad \limsup_{n \mathop \to \infty} \frac {a_n} n \le \inf_{k \mathop \ge 1} \frac {a_k} k$

On the other hand, by definition of infimum:

$\ds \forall n \ge 1 : \inf_{k \mathop \ge 1} \frac {a_k} k \le \frac{a_n} n$
In particular:

$\ds (2): \quad \inf_{k \mathop \ge 1} \frac {a_k} k \le \liminf_{n \mathop \to \infty} \frac {a_n} n$

By Convergence of Limsup and Liminf, $(1)$ and $(2)$ together mean:

$\ds \lim_{n \mathop \to \infty} \frac {a_n} n = \inf_{k \mathop \ge 1} \frac {a_k} k$
$\blacksquare$


Also known as
Fekete's Subadditive Lemma is often referred to just as Fekete's Lemma.


Source of Name
This entry was named for Michael Fekete.


Sources
2015: Michel Coornaert: Topological Dimension and Dynamical Systems: $6.2.$ Subadditive Sequences




