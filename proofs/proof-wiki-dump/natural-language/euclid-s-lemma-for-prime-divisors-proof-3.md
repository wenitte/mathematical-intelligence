# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma_for_Prime_Divisors/Proof_3



Lemma
Let $p$ be a prime number.
Let $a$ and $b$ be integers such that:

$p \divides a b$
where $\divides$ means is a divisor of.
Then $p \divides a$ or $p \divides b$.

In the words of Euclid:

If two numbers by multiplying one another make some number, and any prime number measure the product, it will also measure one of the original numbers.
(The Elements: Book $\text{VII}$: Proposition $30$)


Proof
Let $p \divides a b$.

Suppose $p \nmid a$.
Then by Proposition $29$ of Book $\text{VII} $: Prime not Divisor implies Coprime:

$p \perp a$
As $p \divides a b$, it follows by definition of divisor:

$\exists e \in \Z: e p = a b$
So by Proposition $19$ of Book $\text{VII} $: Relation of Ratios to Products‎:

$p : a = b : e$
But as $p \perp a$, by:

Proposition $21$ of Book $\text{VII} $: Coprime Numbers form Fraction in Lowest Terms
and: 

Proposition $20$ of Book $\text{VII} $: Ratios of Fractions in Lowest Terms
it follows that:

$p \divides b$
Similarly, if $p \perp b$ then $p \divides a$.

Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $30$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.4$: Euclid (flourished ca. $300$ B.C.)
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Euclid




