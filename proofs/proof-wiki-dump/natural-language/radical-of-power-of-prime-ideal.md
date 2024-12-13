# 

Source: https://proofwiki.org/wiki/Radical_of_Power_of_Prime_Ideal

Theorem
Let $A$ be a commutative ring with unity.
Let $\mathfrak p \subseteq A$ be a prime ideal.
Let $n > 0$ be a natural number.

Then the radical of the $n$th power of $\mathfrak p$ equals $\mathfrak p$:

$\map {\operatorname{Rad} } {\mathfrak p^n} = \mathfrak p$


Proof
$(\subseteq):$
Let $a \in \map {\operatorname{Rad} } {\mathfrak p^n}$.
Then by definition, $a^k \in \mathfrak p^n$ for some integer $k$.
By Power of Ideal is Subset, $\mathfrak p^n \subseteq \mathfrak p$.
Hence, $a^k \in \mathfrak p$.
By Power in Prime Ideal, $a \in \mathfrak p$.
$\Box$

$(\supseteq):$
Let $b \in \mathfrak p$.
Then by definition $b^n \in \mathfrak p^n$.
Hence $b \in \map {\operatorname{Rad} } {\mathfrak p^n}$.
$\blacksquare$





