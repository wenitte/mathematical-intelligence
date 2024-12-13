# 

Source: https://proofwiki.org/wiki/Limit_of_Sets_Exists_iff_Limit_Inferior_contains_Limit_Superior



Theorem
Let $\Bbb S = \set {E_n : n \in \N}$ be a sequence of sets.
Then $\Bbb S$ converges to a limit if and only if:

$\ds \limsup_{n \mathop \to \infty} E_n \subseteq \liminf_{n \mathop \to \infty}E_n$


Proof
Sufficient Condition
Let $\Bbb S$ converge to a limit.
Then by definition:

$\ds \limsup_{n \mathop \to \infty} E_n = \liminf_{n \mathop \to \infty} E_n$
and so by definition of set equality:

$\ds \limsup_{n \mathop \to \infty} E_n \subseteq \liminf_{n \mathop \to \infty}E_n$
$\Box$


Necessary Condition
Suppose that:

$\ds \limsup_{n \mathop \to \infty} E_n \subseteq \liminf_{n \mathop \to \infty}E_n$
From Limit Superior includes Limit Inferior:

$\ds \liminf_{n \mathop \to \infty} E_n \subseteq \limsup_{n \mathop \to \infty} E_n$
whether or not $\Bbb S$ converges to a limit.
By definition of set equality:

$\ds \limsup_{n \mathop \to \infty} E_n = \liminf_{n \mathop \to \infty} E_n$
and so by definition $\Bbb S$ converges to a limit.
$\blacksquare$





