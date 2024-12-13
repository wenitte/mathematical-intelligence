# 

Source: https://proofwiki.org/wiki/Lefschetz_Principle_(First-Order)


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\phi$ be a sentence in the language $\LL_r = \set {0, 1, +, -, \cdot}$ for rings, where $0, 1$ are constants and $+, -, \cdot$ are binary functions.

The following statements are equivalent:

$(1): \quad \phi$ is true in every algebraically closed field of characteristic $0$.
$(2): \quad \phi$ is true in some algebraically closed field of characteristic $0$.
$(3): \quad \phi$ is true in algebraically closed fields of characteristic $p$ for arbitrarily large primes $p$.
$(4): \quad \phi$ is true in algebraically closed fields of characteristic $p$ for sufficiently large primes $p$.

Note in particular that since $\C$ is an algebraically closed field of characteristic $0$, these are equivalent to $\phi$ being true in the field $\C$.


Proof
$(1)$ iff $(2)$
From Theory of Algebraically Closed Fields of Characteristic $p$ is Complete:
the theory $ACF_p$ of algebraically closed fields of characteristic $p$ is complete.
That is, all such fields satisfy the exact same $\LL_r$ sentences.
$\Box$


$(2)$ implies $(4)$
Let $\phi$ be true in some such field.
Then:

$ACF_0 \models \phi$
By Gödel's Completeness Theorem and the finiteness of proofs, it follows that there is a finite subset $\Delta$ of $ACF_0$ such that $\Delta \models \phi$.
Such a $\Delta$ can only make finitely many assertions about the character of its models.
Hence, as long as $p$ is selected sufficiently large, an algebraically closed field of characteristic $p$ will satisfy $\phi$.
$\Box$


$(4)$ implies $(3)$
We have that all sufficiently large $p$ work.
Hence it follows that it is always possible to find arbitrarily large $p$ that work.
$\Box$


$(3)$ implies $(2)$
We prove this by contraposition.
Suppose there is no algebraically closed field of characteristic $0$ where $\phi$ is true.
Then $\phi$ is false in algebraically closed fields of characteristic $0$
Since $ACF_0$ is complete, this means that $ACF_0 \models \neg \phi$.
Similarly to the case of $(2)$ implies $(4)$, there must then be a finite subset $\Delta$ of $ACF_0$ such that $\Delta \models \neg \phi$.
But then, for all sufficiently large $p$, we have that $\phi$ is false in the algebraically closed fields of characteristic $p$.
Hence, it cannot be true for arbitrarily large $p$.
By Rule of Transposition, $\phi$ is true in algebraically closed fields for arbitrarily large primes $p$ implies there exists an algebraically closed field of characteristic $0$ where $\phi$ is true.
$\blacksquare$


Source of Name
This entry was named for Solomon Lefschetz.





