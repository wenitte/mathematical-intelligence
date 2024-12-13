# 

Source: https://proofwiki.org/wiki/Rabbit_Problem/Solution



Solution to The Rabbit Problem
Let there be a pair of rabbits.
For the purpose of this exercise, the following assumptions are made.
Rabbits take one month to reach an age at which they may give birth.
Every month thereafter, a breeding pair of rabbits produce one further pair of rabbits.
Rabbits never die and never stop being able to produce further rabbits.

How many pairs of rabbits will be produced from this single pair of rabbits after one year?


Solution
At the end of the first month, the initial pair will produce $1$ new pair of rabbits, making a total of $2$ pairs.
At the end of the second month, the initial pair will produce $1$ more new pair, making a total of $3$.
At the end of the third month:

the initial pair will produce $1$ more new pair
the second pair will produce $1$ pair, as they are now able to breed.
This results in $5$ pairs.

At the end of month $n$, the total count of rabbit pairs is:

the count of the rabbits which were alive at the end of the previous month (all are still alive)
plus:

the count of the rabbits which were alive at the end of the month before that (as all those are of an age to breed).

Let $R \left({n}\right)$ be the number of pairs of rabbits at the end of month $n$.
Thus, by the above reasoning:

$R \left({0}\right) = 1$
$R \left({1}\right) = 2$
$R \left({2}\right) = 3$
$R \left({n}\right) = R \left({n - 1}\right) + R \left({n - 2}\right)$
where $R \left({0}\right)$ is understood as being the number of pairs of rabbits at the end of month $0$, that is, the beginning of month $1$.

Thus it is seen that:

$R \left({n}\right) = F_{n + 2}$
where $F_{n + 2}$ denotes the $n + 2$th Fibonacci number.

Hence, at the end of $12$ months, there will be $F_{14} = 377$ rabbits.
$\blacksquare$


Historical Note
The Rabbit Problem was devised by Leonardo Fibonacci and presented in his Liber Abaci of $1202$.
It is perhaps necessary to point out that this question is not to be considered as a practical application of mathematics to the science of zoology.
As Fibonacci himself wrote:

It is possible to do [the addition] in this order for an infinite number of months.

Neither is it to be confused with the ongoing endemic ecological problem of rabbits in Australia.


Sources
1202: Leonardo Fibonacci: Liber Abaci
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $1$




