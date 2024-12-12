# 

Source: https://proofwiki.org/wiki/Addition_on_1-Based_Natural_Numbers_is_Cancellable_for_Ordering

Theorem
Let $\N_{> 0}$ be the $1$-based natural numbers.
Let $<$ be the strict ordering on $\N_{>0}$.
Let $+$ be addition on $\N_{>0}$.

Then:

$\forall a, b, c \in \N_{>0}: a + c < b + c \implies a < b$
$\forall a, b, c \in \N_{>0}: a + b < a + c \implies b < c$

That is, $+$ is cancellable on $\N_{>0}$ for $<$.


Proof
By Ordering on $1$-Based Natural Numbers is Trichotomy, one and only one of the following holds:

$a = b$
$a < b$
$b < a$

Let $a + c < b + c$.
Suppose $a = b$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Addition:

$a + c = b + c$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this contradicts the fact that $a + c < b + c$.

Similarly, suppose $b < a$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Addition:

$b + c < a + c$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this also contradicts the fact that $a + c < b + c$.

The only other possibility is that $a < b$.

So 

$\forall a, b, c \in \N_{>0}: a + c = b + c \implies a < b$
and so $+$ is right cancellable on $\N_{>0}$ for $<$.

Let $a + b < a + c$.
Suppose $b = c$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Addition:

$a + b = a + c$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this contradicts the fact that $a + b < a + c$.

Similarly, suppose $c < b$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Addition:

$a + c < a + b$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this also contradicts the fact that $a + b < a + c$.

The only other possibility is that $b < c$.

So 

$\forall a, b, c \in \N_{>0}: a + b < a + c \implies b < c$
and so $+$ is left cancellable on $\N_{>0}$ for $<$.

From Natural Number Addition is Commutative and Right Cancellable Commutative Operation is Left Cancellable:

$\forall a, b, c \in \N_{>0}: a + b = a + c \implies b = c$

So $+$ is both right cancellable and left cancellable on $\N_{>0}$.
Hence the result.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $2.2$: Theorem $2.14 \ \text{(i)}$




