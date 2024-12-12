# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Corollary_1/Proof_2

Corollary to Fermat's Little Theorem
If $p$ is a prime number, then $n^p \equiv n \pmod p$.


Proof
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


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-2}$ Fermat's Little Theorem: Theorem $\text {3-4}$




