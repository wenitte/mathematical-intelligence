# 

Source: https://proofwiki.org/wiki/Even_Integer_Plus_5_is_Odd



Theorem
Let $x \in \Z$ be an even integer.
Then $x + 5$ is odd.


Direct Proof
Let $x \in \Z$ be an even integer.
Then $x + 5$ is odd.

Let $x$ be an even integer.
Then by definition:

$x = 2 n$
for some integer $n$.
Let $y = 2 n + 5$.
Then:














\(\ds y\)

\(=\)







\(\ds 2 n + 5\)




















\(\ds \)

\(=\)







\(\ds 2 n + 2 \times 2 + 1\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {n + 2} + 1\)




















\(\ds \)

\(=\)







\(\ds 2 r + 1\)





where $r = n + 2 \in \Z$



Hence $y = 2 n + 5$ is an odd integer by definition.
$\blacksquare$


Indirect Proof
Let $x \in \Z$ be an even integer.
Then $x + 5$ is odd.

Let $x$ be an even integer.
Let $y = 2 n + 5$.

Assume $y = x + 5$ is not an odd integer.
Then:

$y = x + 5 = 2 n$
where $n \in \Z$.

Then:














\(\ds x\)

\(=\)







\(\ds 2 n - 5\)




















\(\ds \)

\(=\)







\(\ds \paren {2 n - 6} + 1\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {n - 3} + 1\)




















\(\ds \)

\(=\)







\(\ds 2 r + 1\)





where $r = n - 3 \in \Z$



Hence $x$ is odd.
That is, it is false that $x$ is even.
It follows by the Rule of Transposition that if $x$ is even, then $y$ is odd.
$\blacksquare$


Proof by Contradiction
Let $x \in \Z$ be an even integer.
Then $x + 5$ is odd.

Let $x$ be an even integer.
Then by definition:

$x = 2 n$
for some integer $n$.

Aiming for a contradiction, suppose $y = x + 5 = 2 m$ for some integer $m$.
Then:














\(\ds x\)

\(=\)







\(\ds 2 m - 5\)




















\(\ds \)

\(=\)







\(\ds \paren {2 m - 6} + 1\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {m - 3} + 1\)




















\(\ds \)

\(=\)







\(\ds 2 r + 1\)





where $r = m - 3 \in \Z$



Hence $x$ is odd.
But this contradicts our premise that $x$ is even.
Hence the result by Proof by Contradiction.
$\blacksquare$


Historical Note
There is nothing profound about this result.
Gary Chartrand used it as a simple demonstration of the construction of various kinds of proof in his Introductory Graph Theory of $1977$.
It is questionable whether the indirect proof and the Proof by Contradiction actually constitute different proofs of this result, but both are included on $\mathsf{Pr} \infty \mathsf{fWiki}$ anyway, in case they are found to be instructional.

He sets a similar theorem as an exercise:

Prove the implication "If $x$ is an odd integer, then $y = x - 3$ is an even integer" using the three proof techniques: ...
but it has been considered not sufficiently different from this one to be actually included on $\mathsf{Pr} \infty \mathsf{fWiki}$ as a separate result to be proved.

For similar reasons, several other of the trivial exercises in applied logic that he sets have also been omitted from this site.




