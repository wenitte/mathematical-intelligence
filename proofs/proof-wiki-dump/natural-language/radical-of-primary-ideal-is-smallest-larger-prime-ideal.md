# 

Source: https://proofwiki.org/wiki/Radical_of_Primary_Ideal_is_Smallest_Larger_Prime_Ideal

Theorem
Let $R$ be a commutative ring with unity.
Let $\mathfrak q$ be a primary ideal of $R$.
Let $\map \Rad {\mathfrak q}$ be the radical of $\mathfrak q$.

Then $\map \Rad {\mathfrak q}$ is the smallest prime ideal containing $\mathfrak q$.


Proof
First, we show that $\map \Rad {\mathfrak q}$ is a prime ideal.
Let $x y \in \map \Rad {\mathfrak q}$.
Then by definition of radical of ideal:

$\exists n \in \N_{>0} : \paren {xy}^n \in \mathfrak q$
By Commutativity $(\text M 2)$:

$x^n y^n \in \mathfrak q$
By definition of primary ideal:

$x^n \in \mathfrak q \lor \exists m \in \N_{>0} : \paren {y^n}^m = y^{n m} \in \mathfrak q$
Thus, by definition of radical of ideal:

$x \in \map \Rad {\mathfrak q} \lor y \in \map \Rad {\mathfrak q}$
So, $\map \Rad {\mathfrak q}$ is a prime ideal.

Finally, by Prime Ideal Including Ideal Includes Radical, every prime ideal $\mathfrak p$ satisfies:

$\mathfrak q \subseteq \mathfrak p \implies \map \Rad {\mathfrak q} \subseteq \mathfrak p$
That is, $\map \Rad {\mathfrak q}$ is the smallest prime ideal including $\mathfrak q$.
$\blacksquare$





