# 

Source: https://proofwiki.org/wiki/Fibonacci_Nim/Examples/1000

Example of Game of Fibonacci Nim
Let a game of Fibonacci nim between player $\text A$ and player $\text B$ have a starting pile of $1000$ counters.
The optimal strategy for player $\text A$ is to take $13$ counters.


Proof
Expressed in Zeckendorf representation:

$1000 = 987 + 13 = F_{16} + F_7$
That is:

$1000 = F_{k_1} + F_{k_2} + \cdots + F_{k_r}$
where $k_1 = 16$ and $k_2 = k_r = 7$.
The maximum number of counters that can be taken here is $1000 - 1 = 999$.
By Optimal Strategy for Fibonacci Nim, player $\text A$ can force a win if and only if it is possible to take $F_{k_r}$ counters.
In this case, $F_{k_r} = 13$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $37$




