# 

Source: https://proofwiki.org/wiki/Addition_on_1-Based_Natural_Numbers_is_Cancellable

Theorem
Let $\N_{> 0}$ be the $1$-based natural numbers.
Let $+$ be addition on $\N_{>0}$.

Then:

$\forall a, b, c \in \N_{>0}: a + c = b + c \implies a = b$
$\forall a, b, c \in \N_{>0}: a + b = a + c \implies b = c$

That is, $+$ is cancellable on $\N_{>0}$.


Proof
By Ordering on $1$-Based Natural Numbers is Trichotomy, one and only one of the following holds:

$a = b$
$a < b$
$b < a$

Suppose $a < b$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Addition:

$a + c < b + c$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this contradicts the fact that $a + c = b + c$.

Similarly, suppose $b > a$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Addition:

$b + c < a + c$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this also contradicts the fact that $a + c = b + c$.

The only other possibility is that $a = b$.

So 

$\forall a, b, c \in \N_{>0}: a + c = b + c \implies a = b$
and so $+$ is right cancellable on $\N_{>0}$.
From Natural Number Addition is Commutative and Right Cancellable Commutative Operation is Left Cancellable:

$\forall a, b, c \in \N_{>0}: a + b = a + c \implies b = c$

So $+$ is both right cancellable and left cancellable on $\N_{>0}$.
Hence the result.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers: $\text{A} 3$
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $2.2$: Theorem $2.12$




