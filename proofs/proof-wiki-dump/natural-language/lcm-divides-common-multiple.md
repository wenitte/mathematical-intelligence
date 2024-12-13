# 

Source: https://proofwiki.org/wiki/LCM_Divides_Common_Multiple



Theorem
Let $a, b \in \Z$ such that $a b \ne 0$.
Let $n$ be any common multiple of $a$ and $b$.
That is, let $n \in \Z: a \divides n, b \divides n$.

Then:

$\lcm \set {a, b} \divides n$
where $\lcm \set {a, b}$ is the lowest common multiple of $a$ and $b$.

In the words of Euclid:

If two numbers measure any number, the least number measured by them will also measure the same.
(The Elements: Book $\text{VII}$: Proposition $35$)


Proof
Let $m = \lcm \set {a, b}$.
Then $a \divides m$ and $b \divides m$ by definition.
Suppose $n$ is some other common multiple of $a$ and $b$ such that $m \nmid n$ ($m$ does not divide $n$).
Then from the Division Theorem:

$n = k m + r$
for some integer $k$ and with $0 < r < m$.
Then since $r = n - k m$, using $a \divides n$ and $a \divides m$:

$a \divides r$
Similarly:

$b \divides r$
Then $r$ is a common multiple of $a$ and $b$.
But we have that $r < m$.
This contradicts the fact that $m$ is the lowest common multiple of $a$ and $b$.
So, by contradiction, it follows that $m \divides n$.
$\blacksquare$


Historical Note
This proof is Proposition $35$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \gamma$




