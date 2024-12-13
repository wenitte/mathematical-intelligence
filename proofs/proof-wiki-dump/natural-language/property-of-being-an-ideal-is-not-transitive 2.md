# 

Source: https://proofwiki.org/wiki/Property_of_Being_an_Ideal_is_not_Transitive


This article needs to be linked to other articles.In particular: Review existing links, fill out some gapsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $J_1$ be an ideal of a ring $R$.
Let $J_2$ be an ideal of $J_1$.
Then $J_2$ need not necessarily be an ideal of $R$.


Proof
Let $R = \Q \sqbrk X$ be the ring of polynomials in one variable $X$ over $\Q$.
Let:

$J_1 = \set {a_0 + a_1 X + \cdots + a_n X^n \in R : a_0 = a_1 = 0}$
and

$J_2 = \set {a_0 + a_1 X + \cdots + a_n X^n \in R : a_0 = a_1 = a_3 = 0}$

First let us show that $J_1$ is an ideal of $R$.
We establish the properties of the ideal test in order.
$(1): \quad J_1 \ne \O$
This follows from the fact that $X^2 \in J_1$.

$(2): \quad \forall P, Q \in J_1: P + \paren {-Q} \in J_1$
Let:

$\ds P = \sum_{i \mathop = 0}^{+\infty} a_i X^i \in J_1$
$\ds Q = \sum_{i \mathop = 0}^{+\infty} b_i X^i \in J_1$
Then by the definition of addition of polynomials:

$\ds P + \paren {-Q} = \sum_{i \mathop = 0}^{+\infty} c_i X^i$
where:

$c_i = a_i - b_i$
By assumption, $a_0 = a_1 = b_0 = b_1 = 0$.
Therefore:

$c_0 = a_0 - b_0 = 0$
$c_1 = a_1 - b_1 = 0$
Therefore $P + \paren {-Q} \in J_1$.

$(3): \quad \forall P \in J_1, Q \in R: Q \cdot P \in J_1$
Let

$\ds P = \sum_{i \mathop = 0}^{+\infty} a_i X^i \in J_1$
$\ds Q = \sum_{i \mathop = 0}^{+\infty} b_i X^i \in R$
By the definition of multiplication of polynomials:

$\ds Q \cdot P = \sum_{i \mathop = 0}^{+\infty} c_i X^i$
where:

$c_i = \sum_{j + k \mathop = i} a_j b_k$
In particular, since $a_0 = 0$:

$c_0 = a_0 b_0 = 0$
Since $a_0 = a_1 = 0$:

$c_ 1 = a_0 b_1 + a_1 b_0 = 0$
Therefore $Q \cdot P \in J_1$.
This shows that $J_1$ is an ideal of $R$.

Next we show that $J$ is an ideal of $J_1$.
Again, we verify the properties of the ideal test in turn.

$(1): \quad J_2 \ne \O$
This follows from the fact that $X^2 \in J_2$.

$(2): \quad \forall P, Q \in J_2: P + \paren {-Q} \in J_2$
Let:

$\ds P = \sum_{i \mathop = 0}^{+\infty} a_i X^i \in J_2$
$\ds Q = \sum_{i \mathop = 0}^{+\infty} b_i X^i \in J_2$
Then by the definition of addition of polynomials:

$\ds P + \paren {-Q} = \sum_{i \mathop = 0}^{+\infty} c_i X^i$
where:

$c_i = a_i - b_i$
By assumption:

$a_0 = a_1 = a_3 = b_0 = b_1 = b_3 = 0$
Therefore:

$c_0 = a_0 - b_0 = 0$
$c_1 = a_1 - b_1 = 0$
$c_3 = a_3 - b_3 = 0$
Therefore $P + \paren {-Q} \in J_2$.

$(3): \quad \forall P \in J_2, Q \in J_1: Q \cdot P \in J_2$
Let

$\ds P = \sum_{i \mathop = 0}^{+\infty} a_i X^i \in J_2$
$\ds Q = \sum_{i \mathop = 0}^{+\infty} b_i X^i \in J_1$
By the definition of multiplication of polynomials,

$\ds Q \cdot P = \sum_{i \mathop = 0}^{+\infty} c_i X^i$
where:

$c_i = \sum_{j + k \mathop = i} a_j b_k$
Since $J_2 \subseteq J_1$, we have $P, Q \in J_1$.
So we have already that $c_0 = c_1 = 0$.
Moreover $a_0 = a_1 = b_0 = b_1 = 0$, so

$c_3 = a_0b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0 = 0$
Therefore $Q \cdot P \in J_2$.
This shows that $J_2$ is an ideal of $J_1$.

Finally we wish to see that $J_2$ is not an ideal of $R$.
We have that $X^2 \in J_2$ and $X \in R$.
Aiming for a contradiction, suppose $J_2$ were an ideal of $R$.
This would imply that:

$X \cdot X^2 = X^3 \in J_2$
But by the definition of $J_2$, we must have that the coefficient of $X^3$ is $0$.
This is a contradiction, so $J_2$ is not an ideal of $R$.
$\blacksquare$





