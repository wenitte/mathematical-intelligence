# 

Source: https://proofwiki.org/wiki/Hilbert%27s_Basis_Theorem/Corollary


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $A$ be a Noetherian ring.
Let $n \ge 1$ be an integer.
Let $A \sqbrk {x_1, \ldots, x_n}$ be the ring of polynomial forms over $A$ in the indeterminates $x_1, \ldots, x_n$.

Then $A \sqbrk {x_1, \ldots, x_n}$ is also a Noetherian ring.


Proof
We proceed by induction over $n \ge 1$.


Basis for the induction
Suppose that $n = 1$.
Then $A \sqbrk {x_1, \ldots, x_n} = A \sqbrk {x_1}$ is the ring of polynomial forms in a single indeterminate $x_1$.
Thus by Hilbert's Basis Theorem, $A \sqbrk {x_1}$ is Noetherian.


Induction step
Suppose that $A \sqbrk {x_1, \ldots, x_{n - 1} }$ is Noetherian.
We wish to show that $A \sqbrk {x_1, \ldots, x_n}$ is Noetherian.
By Adjunction of Indeterminates to Ring is Associative:

$A \sqbrk {x_1, \ldots, x_n} = A \sqbrk {x_1, \ldots, x_{n - 1} } \sqbrk {x_n}$
is the polynomial ring in a single indeterminate $x_n$ over the Noetherian ring $A \sqbrk {x_1, \ldots, x_{n - 1} }$.
Thus by Hilbert's Basis Theorem, $A \sqbrk {x_1, \ldots, x_n}$ is Noetherian.
$\blacksquare$





