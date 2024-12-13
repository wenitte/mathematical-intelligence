# 

Source: https://proofwiki.org/wiki/Necessary_Conditions_for_Existence_of_Skolem_Sequence

Theorem
A Skolem sequence of order $n$ can only exist if $n \equiv 0, 1 \pmod 4$.


Proof
Let $S$ be a Skolem sequence of order $n$.
Let $a_i$ and $b_i$ be the positions of the first and second occurrences respectively of the integer $i$ in $S$, where $1 \le i \le n$.
We can thus conclude that:

$b_i - a_i = i$
for each $i$ from 1 to $n$.
Summing both sides of this equation we obtain:

$\ds \sum_i^n b_i - \sum_i^n a_i = \sum_i^n i = \frac {n \paren {n + 1} } 2$
Now the $a_i$ and the $b_i$ represent the positions in the sequence from $1$ to $2 n$.
Hence:

$\ds \sum_i^n b_i + \sum_i^n a_i = \frac {2 n \paren {2 n + 1} } 2 = n \paren {2 n + 1}$
Summing the previous two equations we obtain the identity:

$\ds \sum_i^n b_i = \frac {n \paren {5 n + 3} } 4$
The left hand side of this last equality is a sum of positions and thus must be an integer.
We conclude that the right hand side must also be an integer.
This occurs exactly when:
$n \equiv 0, 1 \pmod 4$
$\blacksquare$


Sources
1957: Th. Skolem: On certain distributions of integers in pairs with given differences (Math. Scand. Vol. 5: pp. 57 – 68)




