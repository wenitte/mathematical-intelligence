# 

Source: https://proofwiki.org/wiki/Finitely_Generated_Algebraic_Extension_is_Finite


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $L/K$ be a field extension and $\alpha_1,\ldots,\alpha_n \in L$ algebraic over $K$.
Then $K \left({\alpha_1, \ldots, \alpha_n}\right) / K$ is a finite field extension.


Proof
Let $S = \left\{{\alpha_1, \ldots, \alpha_n}\right\}$.
We show by induction on $n$ that $K \left({S}\right) / K$ is finite.
Clearly $K$ is finite over itself, so the result holds when $n = 0$.
Now suppose that for all sets $T \subseteq L$ with $\left|{T}\right| \leq n - 1$ and each element of $T$ algebraic over $K$, $K \left({T}\right) / K$ is finite. We have:

$K \left({S}\right) = K \left({\alpha_1, \ldots, \alpha_{n-1}}\right) \left({\alpha_n}\right)$
By the induction hypothesis $K \left({\alpha_1, \ldots, \alpha_{n-1}}\right) / K$ is finite.
By the Structure of Simple Algebraic Field Extension $K \left({S}\right) / K \left({\alpha_1, \ldots, \alpha_{n-1}}\right)$ is finite.
Therefore, by the Tower Law, $K \left({S}\right) / K$ is finite.
$\blacksquare$





