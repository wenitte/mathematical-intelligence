# 

Source: https://proofwiki.org/wiki/Ordering/Examples/Example_Ordering_on_Integers



Example of Ordering
Let $\preccurlyeq$ denote the relation on the set of integers $\Z$ defined as:

$a \preccurlyeq b$ if and only if $0 \le a \le b \text { or } b \le a < 0 \text { or } a < 0 \le b$
where $\le$ is the usual ordering on $\Z$.
Then $\preccurlyeq$ is an ordering on $\Z$.


Proof
Reflexivity
Let $0 \le a$.
Then $0 \le a \le a$ and so $a \preccurlyeq a$.
Let $a < 0$.
Then $a \le a < 0$ and so $a \preccurlyeq a$.
Thus in both cases $a \preccurlyeq a$.
So $\preccurlyeq$ has been shown to be reflexive.
$\Box$


Transitivity
Let $a, b, c \in \R$ such that:

$a \preccurlyeq b \text { and } b \preccurlyeq c$

Let $0 \le a \le b$.
Then:

$0 \le b \le c$
and so:

$0 \le a \le c$
That is:
$a \preccurlyeq c$

Let $b \le a < 0$.
Then there are two cases for $c$:

$(1): \quad c \le b < 0$
Then we have:

$c \le a < 0$
That is:
$a \preccurlyeq c$

$(2): \quad b < 0 \le c$
Then we have:

$a < 0 \le c$
That is:
$a \preccurlyeq c$
In both cases:
$a \preccurlyeq c$

Let $a < 0 \le b$.
Then:

$0 \le b \le c$
and so:

$0 < a \le c$
That is:
$a \preccurlyeq c$

In all cases:
$a \preccurlyeq c$

So $\preccurlyeq$ has been shown to be transitive.
$\Box$


Antisymmetry
Let $a, b \in \R$ such that:

$a \preccurlyeq b \text { and } b \preccurlyeq a$

Let $0 \le a \le b$.
Then as $b \ge 0$:

$0 \le b \le a$
Thus:

$a \le b \text { and } b \le a$
and as $\le$ is the usual ordering, and so antisymmetric:

$a = b$

Let $b \le a < 0$.
Then as $b < 0$:

$a \le b < 0$
Thus:

$a \le b \text { and } b \le a$
and as $\le$ is the usual ordering, and so antisymmetric:

$a = b$

Let $a < 0 \le b$.
But then because $b \le a$:

$0 \le b \le a$
which contradicts $a < 0$.
Hence if both $a \le b$ and $b \le a$, it cannot happen that $0 \le b \le a$.

All cases are accounted for, and it has been shown that:

$a \preccurlyeq b \text { and } b \preccurlyeq a \implies a = b$

So $\preccurlyeq$ has been shown to be antisymmetric.
$\Box$

$\preccurlyeq$ has been shown to be reflexive, transitive and antisymmetric.
Hence by definition it is an ordering.

It is seen that $\preccurlyeq$ looks like:

$-1 \preccurlyeq -2 \preccurlyeq -3 \preccurlyeq \cdots \preccurlyeq 0 \preccurlyeq 1 \preccurlyeq 2 \preccurlyeq \cdots$
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: $(4)$




