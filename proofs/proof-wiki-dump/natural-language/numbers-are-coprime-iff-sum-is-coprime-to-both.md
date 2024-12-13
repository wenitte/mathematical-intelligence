# 

Source: https://proofwiki.org/wiki/Numbers_are_Coprime_iff_Sum_is_Coprime_to_Both



Theorem
Let $a, b$ be integers.

Then:

$a \perp b \iff a \perp \paren {a + b}$
where $a \perp b$ denotes that $a$ and $b$ are coprime.

In the words of Euclid:

If two numbers be prime to one another, the sum will also be prime to each of them; and if the sum of two numbers be prime to any one them, the original numbers will also be prime to one another.
(The Elements: Book $\text{VII}$: Proposition $28$)


Proof
Necessary Condition
Let $a \perp b$.
Suppose $a + b$ is not coprime to $a$.
Then:

$\exists d \in \Z_{>1}: d \divides a, d \divides \paren {a + b}$
But then:

$d \divides \paren {\paren {a + b} - a}$
and so:

$d \divides b$
and so $a$ and $b$ are not coprime.
From this contradiction it follows that $a + b$ is coprime to $a$.
$\Box$


Sufficient Condition
Let $a + b$ be coprime to $a$.
Suppose $a$ is not coprime to $b$.
Then:

$\exists d \in \Z_{>1}: d \divides a, d \divides b$
and so:

$d \divides \paren {a + b}$
and so $a$ and $\paren {a + b}$ are not coprime.
From this contradiction it follows that $a$ is coprime to $b$.
$\blacksquare$


Historical Note
This proof is Proposition $28$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions




