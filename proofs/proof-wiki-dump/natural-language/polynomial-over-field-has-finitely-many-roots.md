# 

Source: https://proofwiki.org/wiki/Polynomial_over_Field_has_Finitely_Many_Roots


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $F$ be a field.
Let $F \left[{x}\right]$ be the ring of polynomial functions in the indeterminate $x$.
If $p \in F \left[{x}\right]$ be non-null, then $p$ has finitely many roots in $F$.


Proof
Let $n \ge 1$ be the degree of $p$.
We argue that $p$ has at most $n$ roots in $F$.

Let $A$ be the set of roots of $p$.
Let $a \in A$.
By the Polynomial Factor Theorem:

$p \left({x}\right) = q_1 \left({x}\right) \cdot \left({x - a}\right)$
where $\deg q_1 = n - 1$.

Let $a' \in A$ such that $a' \ne a$.
Then since:

$p \left({a'}\right) = 0$
but:

$\left({a' - a}\right) \ne 0$
it follows that:

$q_1 \left({a'}\right) = 0$
Again by the Polynomial Factor Theorem:

$q_1 \left({x}\right) = q_2 \left({x}\right) \cdot \left({x - a'}\right)$
Therefore:

$p \left({x}\right) = q_2 \left({x}\right) \cdot \left({x - a'}\right) \cdot \left({x - a}\right)$
where $\deg q_2 = n-2$.

We can repeat this procedure as long as there are still distinct roots in $A$.
After the $i$th iteration we obtain a polynomial $q_i$ of degree $n-i$.
Now the degree of $q_i$ decreases each time we factor out a root of $p$, so $q_n$ is necessarily a constant term.
Therefore $q_n$ can share no roots with $p$.
So this procedure must stop by at most the $n$th step.
That is, we can pick at most $n$ distinct elements from the set $A$, and:

$\left\vert{A}\right\vert \le n$
$\blacksquare$





