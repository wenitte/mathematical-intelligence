# 

Source: https://proofwiki.org/wiki/Integer_Coprime_to_Factors_is_Coprime_to_Whole/Proof_1



Theorem
Let $a, b, c \in \Z$ be integers.
Let:

$a \perp b$
$a \perp c$
where $\perp$ denotes coprimality.
Then:

$a \perp b c$

In the words of Euclid:

If two numbers be prime to any number, their product also will be prime to the same.
(The Elements: Book $\text{VII}$: Proposition $24$)


Proof
This proof follows the structure of Euclid's proof, if not its detail.
Let $a, b, c \in \Z$ such that $c$ is coprime to each of $a$ and $b$.
Let $d = a b$.
Aiming for a contradiction, suppose $c$ and $d$ are not coprime.
Then:

$\exists e \in \Z_{>1}: e \divides c, e \divides d$
We have that $c \perp a$ and $e \divides c$
From Proposition $23$ of Book $\text{VII} $: Divisor of One of Coprime Numbers is Coprime to Other:

$e \perp a$
As $e \divides d$ it follows by definition of divisibility that:

$\exists f \in \Z: e f = d$
We also have that:

$a b = d$
So:

$a b = e f$
But from Proposition $19$ of Book $\text{VII} $: Relation of Ratios to Products:

$e : a = b : f$
or in more contemporary language:

$\dfrac a e = \dfrac b f$
But $a \perp e$.
From Proposition $21$ of Book $\text{VII} $: Coprime Numbers form Fraction in Lowest Terms, $\dfrac a e$ is in canonical form.
From Proposition $20$ of Book $\text{VII} $: Ratios of Fractions in Lowest Terms:

$e \divides b$
But we already have that:

$e \divides c$
So $e$ is a divisor of both $b$ and $c$.
But this is a contradiction of the assertion that $c$ and $b$ are coprime.
Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $24$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions




