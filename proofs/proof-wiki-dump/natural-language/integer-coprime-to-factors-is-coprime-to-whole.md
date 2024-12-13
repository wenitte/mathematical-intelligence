# 

Source: https://proofwiki.org/wiki/Integer_Coprime_to_Factors_is_Coprime_to_Whole



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


Integer Coprime to all Factors is Coprime to Whole
Let $a, b \in \Z$.
Let $\ds b = \prod_{j \mathop = 1}^r b_j$
Let $a$ be coprime to each of $b_1, \ldots, b_r$.

Then $a$ is coprime to $b$.


Proof 1
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


Proof 2
Let $a, b, c \in \Z$ such that $a$ is coprime to each of $b$ and $c$.
We have:














\(\ds a\)

\(\perp\)







\(\ds b\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \exists x, y \in \Z: \, \)



\(\ds 1\)

\(=\)







\(\ds a x + b y\)





Integer Combination of Coprime Integers














\(\ds a\)

\(\perp\)







\(\ds c\)














\(\ds \leadsto \ \ \)

\(\ds \exists u, v \in \Z: \, \)



\(\ds 1\)

\(=\)







\(\ds a u + c v\)





Integer Combination of Coprime Integers














\(\ds \)

\(=\)







\(\ds \paren {a x + b y} \paren {a u + c v}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds a^2 u x + a c v x + a b y u + b c y v\)





multiplying out














\(\ds \)

\(=\)







\(\ds a \paren {a u x + c v x + b y u} + b c \paren {y v}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\perp\)







\(\ds b c\)





Integer Combination of Coprime Integers



$\blacksquare$


Historical Note
This proof is Proposition $24$ of Book $\text{VII}$ of Euclid's The Elements.





