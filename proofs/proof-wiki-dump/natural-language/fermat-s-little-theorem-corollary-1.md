# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Corollary_1



Corollary to Fermat's Little Theorem
If $p$ is a prime number, then $n^p \equiv n \pmod p$.


Proof 1
There are two cases:

$(1): \quad$ If $p \divides n$, then $n^p \equiv 0 \equiv n \pmod p$.
$(2): \quad$ Otherwise, $p \nmid n$.
Then, by Fermat's Little Theorem, $n^{p-1} \equiv 1 \pmod p$.
Multiplying both sides by $n$, then by Congruence of Product we have:

$n^p \equiv n \pmod p$
$\blacksquare$


Proof 2
Suppose we want to form strings of colored beads, each with exactly $p$ beads in.
Suppose we have an unlimited number of beads to allow unlimited use of each of $n$ colors.
How many different strings can we form?
The answer is $n^p$ as each bead can be chosen in $n$ ways and there are $p$ choices for each string.
Out of these $n^p$ possibilities, exactly $n$ strings have beads of only one color.
Put these aside, and thus there are $n^p - n$ beads remaining.
Suppose we then form bracelets from these strings by joining one end to the other and making them closed loops.
Now we can change any string of beads by removing one bead from one end and putting it on the other.
This produces a different string of beads without changing the resulting bracelet.
Let $k$ be the least number of times this operation can be done before the original color scheme is reproduced.
Clearly $k > 1$ as the monocolor strings have all been eliminated.
After $2 k$ steps the bracelet will once again be reproduced, and again at $3 k$ and so on.
By the Division Theorem there exists $h$ and $r$ such that $p = h k + r$ where $0 \le r < k$.
Since the color scheme is reproduced after $h k$ steps and also after $p$ steps, it takes exactly $r$ steps after the $h k$th step to get back to the original color scheme.
Since $r < k$ and $k$ is the least positive number of such steps, $r = 0$.
So $p = h k$ and so $k = p$ as $p$ is prime.
So the $n^p - n$ strings fall into groups of $p$ strings each, and each one forms a separate bracelet.
So the number of bracelets $N$ multiplied by $p$ gives the number of strings which are not monocolor, that is, $n^p - n$.
So $p N = n^p - n$, that is, $p \divides n^p - n$, and the result follows.
$\blacksquare$


Also reported as
Fermat's Little Theorem: Corollary $1$ can also be reported as:

If $p$ is a prime number, then $n^p - n$ is divisible by $p$.


Also known as
Some sources refer to Fermat's Little Theorem: Corollary $1$  as Fermat's Little Theorem, and from it derive Fermat's Little Theorem as a corollary.


Source of Name
This entry was named for Pierre de Fermat.


Historical Note
Fermat's Little Theorem was first stated, without proof, by Pierre de Fermat in $1640$.
Chinese mathematicians were aware of the result for $n = 2$ some $2500$ years ago.

The appearance of the first published proof of this result is the subject of differing opinions.

Some sources have it that the first published proof was by Leonhard Paul Euler $1736$.
Others state that it was first proved by Gottfried Wilhelm von Leibniz in an undated manuscript, and that he may have known a proof before $1688$, perhaps as early as $1683$.
MathWorld's page on the subject reports the first published proof as being by Leonhard Paul Euler $1749$, but it is possible this has been conflated with the proof for Fermat's Two Squares Theorem.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{IV}$: The Prince of Amateurs
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Exercise $25.6$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Exercise $11$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-1}$ Basic Properties of Congruences: Example $\text {4-2}$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 6$: The Brachistochrone. Fermat and the Bernoullis
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Theorem $\text{F}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Fermat's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Fermat's theorem
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Fermat
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Fermat's Little Theorem




