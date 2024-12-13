# 

Source: https://proofwiki.org/wiki/Multiplication_on_1-Based_Natural_Numbers_is_Cancellable_for_Ordering

Theorem
Let $\N_{> 0}$ be the $1$-based natural numbers.
Let $\times$ be multiplication on $\N_{>0}$.
Let $<$ be the strict ordering on $\N_{>0}$.

Then:

$\forall a, b, c \in \N_{>0}: a \times c < b \times c \implies a < b$
$\forall a, b, c \in \N_{>0}: a \times b < a \times c \implies b < c$

That is, $\times$ is cancellable on $\N_{>0}$ for $<$.


Proof
By Ordering on $1$-Based Natural Numbers is Trichotomy, one and only one of the following holds:

$a = b$
$a < b$
$b < a$

Let $a \times c < b \times c$.
Suppose $a = b$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Multiplication:

$a \times c = b \times c$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this contradicts the fact that $a \times c < b \times c$.

Similarly, suppose $b < a$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Multiplication:

$b \times c < a \times c$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this also contradicts the fact that $a \times c < b \times c$.

The only other possibility is that $a < b$.

So 

$\forall a, b, c \in \N_{>0}: a \times c = b \times c \implies a < b$
and so $\times$ is right cancellable on $\N_{>0}$ for $<$.

Let $a \times b < a \times c$.
Suppose $b = c$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Multiplication:

$a \times b = a \times c$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this contradicts the fact that $a \times b < a \times c$.

Similarly, suppose $c < b$.
Then by Ordering on $1$-Based Natural Numbers is Compatible with Multiplication:

$a \times c < a \times b$
By Ordering on $1$-Based Natural Numbers is Trichotomy, this also contradicts the fact that $a \times b < a \times c$.

The only other possibility is that $b < c$.

So 

$\forall a, b, c \in \N_{>0}: a \times b < a \times c \implies b < c$
and so $\times$ is left cancellable on $\N_{>0}$ for $<$.

From Natural Number Multiplication is Commutative and Right Cancellable Commutative Operation is Left Cancellable:

$\forall a, b, c \in \N_{>0}: a \times b = a \times c \implies b = c$

So $+$ is both right cancellable and left cancellable on $\N_{>0}$.
Hence the result.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $2.2$: Theorem $2.14 \ \text{(ii)}$




