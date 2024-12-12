# 

Source: https://proofwiki.org/wiki/Exist_Term_in_Arithmetic_Sequence_Divisible_by_Number


It has been suggested that this page be renamed.In particular: Not sure what but "Exist Term" is not niceTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\sequence {a_k}$ be an $n$-term arithmetic sequence in $\Z$ defined by:

$a_k = a_0 + k d$ for $k = 0, 1, 2, \dots, n - 1$
Let $b$ be a (strictly) positive integer such that $b$ and $d$ are coprime and $b \le n$.
Then there exists a term in $\sequence {a_k}$ that is divisible by $b$.


Proof
We claim that at least one of the first $b$ terms:

$a_0, a_0 + d, a_0 + 2 d, \dots, a_0 + \paren {b - 1} d$
is divisible by $b$.
Consider the remainders of each term after division by $b$.
They can takes on values of $0 \le r < b$.
If one of them gives $r = 0$ then we are done.

Aiming for a contradiction, suppose not.
Since there are $b$ terms but only $b - 1$ possible remainders, by Pigeonhole Principle at least two terms must share a remainder.
That is:

$a_0 + i d \equiv a_0 + j d \pmod b$
for some $i, j$ where and $0 \le i < j \le b - 1$.
But then:

$\paren {j - i} d \equiv 0 \pmod b$
so $b \divides \paren {j - i} d$.
Since $b \perp d$, by Euclid's Lemma we have $b \divides \paren {j - i}$.
Since $0 < j - i < b$ we must have $b \nmid \paren {j - i}$ by Absolute Value of Integer is not less than Divisors.
This is a contradiction.
Therefore there is at least one term that is divisible by $b$.
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: Proof based on $d$ coprime with $b$ is invertible in $\struct {\Z_b, \times}$ so that we can take $d^{-1}a_0 \pmod b$ for $k$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




