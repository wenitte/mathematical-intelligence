# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma_for_Unique_Factorization_Domain



Lemma
Let $\struct {D, +, \times}$ be a unique factorization domain.
Let $p$ be an irreducible element of $D$.
Let $a, b \in D$ such that:

$p \divides a \times b$
where $\divides$ means is a divisor of.

Then $p \divides a$ or $p \divides b$.


General Result
Let $p$ be an irreducible element of $D$.
Let $n \in D$ such that:

$\ds n = \prod_{i \mathop = 1}^r a_i$
where $a_i \in D$ for all $i: 1 \le i \le r$.

Then if $p$ divides $n$, it follows that $p$ divides $a_i$ for some $i$.

That is:

$p \divides a_1 a_2 \ldots a_n \implies p \divides a_1 \lor p \divides a_2 \lor \cdots \lor p \divides a_n$


Proof
The elements $a$ and $b$ have complete factorizations:

$a = u \times x_1 \times x_2 \times \cdots \times x_n$
and

$b = v \times y_1 \times y_2 \times \cdots \times y_m$
where $u$ and $v$ are units of $D$ and $x_1, x_2, \ldots, x_n$ and $y_1, y_2, \ldots, y_m$ are irreducible elements.
Then the unique complete factorization of $a \times b$ into irreducible elements is:

$(1): \quad a \times b = \paren {u \times v} \times x_1 \times x_2 \times \cdots \times x_n \times y_1 \times y_2 \times \cdots \times y_m$
If $p$ is an associate of $x_i$ for some $i$ then we will have $p \divides a$.
Similarly, if $p$ is an associate of $y_i$ for some $i$ then $p \divides b$. 

Aiming for a contradiction, suppose that $p$ is not an associate of $x_i$ or $y_i$ for all $i$.
Since $p \divides a \times b$, there is a $c \in D$ such that $p \times c = a \times b$.
This element $c$ has the unique complete factorization:

$c = w \times z_1 \times z_2 \times \cdots \times z_l$
where $w$ is a unit of $D$ and $z_1, z_2, \ldots, z_l$ are irreducible elements.
This gives us another complete factorization:

$a \times b = w \times p \times z_1 \times z_2 \times \cdots \times z_l$
But the complete factorization $(1)$ contains no irreducible element that is an associate of $p$.
This contradicts the unique factorization of $a \times b$.
We conclude that $p$ is an associate of $x_i$ or $y_i$ for some $i$.
Therefore, $p \divides a$ or $p \divides b$.
$\blacksquare$


Source of Name
This entry was named for Euclid.


Also see

This page has been identified as a candidate for refactoring of medium complexity.In particular: These results could/should all be interlinked appropriately. Or perhaps an overview page transcluding all of them.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Euclid's Lemma for Prime Divisors, for the usual statement of this result, which is this lemma as applied specifically to the integers.
Euclid's Lemma for Irreducible Elements is the same result when $D$ is a Euclidean Domain.




