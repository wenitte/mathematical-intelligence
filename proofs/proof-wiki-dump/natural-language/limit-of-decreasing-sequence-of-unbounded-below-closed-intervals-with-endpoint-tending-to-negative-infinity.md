# 

Source: https://proofwiki.org/wiki/Limit_of_Decreasing_Sequence_of_Unbounded_Below_Closed_Intervals_with_Endpoint_Tending_to_Negative_Infinity

Theorem
Let $\sequence {x_n}_{n \mathop \in \N}$ be a decreasing sequence with $x_n \to -\infty$.

Then: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \O$
That is: 

$\hointl {-\infty} {x_n} \downarrow \O$
where $\downarrow$ denotes the limit of decreasing sequence of sets.


Proof
Aiming for a contradiction, suppose suppose that:

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} \ne \O$
Let: 

$\ds x \in \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$
Then: 

$x \in \hointl {-\infty} {x_n}$ for each $n$.
From the definition of a sequence diverging to $-\infty$:

there exists $N \in \N$ such that $x_N < x$.
But then: 

$x \not \in \hointl {-\infty} {x_N}$
contradicting that: 

$x \in \hointl {-\infty} {x_n}$ for each $n$.
So we have reached a contradiction, and we have: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \O$
$\blacksquare$





