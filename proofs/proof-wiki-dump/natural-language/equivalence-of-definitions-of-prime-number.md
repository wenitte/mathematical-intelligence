# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Prime_Number



Theorem
The following definitions of the concept of Prime Number are equivalent:

Definition 1
A prime number $p$ is a positive integer that has exactly two divisors which are themselves positive integers.

Definition 2
Let $p$ be a positive integer.
Then $p$ is a prime number if and only if $p$ has exactly four integral divisors: $\pm 1$ and $\pm p$.

Definition 3
Let $p$ be a positive integer.
Then $p$ is a prime number if and only if:

$\map {\sigma_0} p = 2$
where $\map {\sigma_0} p$ denotes the divisor count function of $p$.

Definition 4
A prime number $p$ is an integer greater than $1$ that has no positive integer divisors other than $1$ and $p$.

Definition 5
A prime number $p$ is an integer greater than $1$ that has no (positive) divisors less than $p$ other than $1$.

Definition 6
Let $p \in \N$ be an integer such that $p \ne 0$ and $p \ne \pm 1$.
Then $p$ is a prime number if and only if

$\forall a, b \in \Z: p \divides a b \implies p \divides a$ or $p \divides b$
where $\divides$ means is a divisor of.

Definition 7
A prime number $p$ is an integer greater than $1$ which cannot be written in the form:

$p = a b$
where $a$ and $b$ are both positive integers less than $p$.


Proof
Definition 1 iff Definition 2
This is proved in Prime Number has 4 Integral Divisors:

Necessary Condition
Let $p$ be a prime number from the definition that $p$ has exactly $2$ divisors which are positive integers.
From One Divides all Integers and Integer Divides Itself those positive integers are $1$ and $p$.
Also, we have $-1 \divides p$ and $-p \divides p$ from One Divides all Integers and Integer Divides its Negative.

Aiming for a contradiction, suppose:

$\exists x < 0: x \divides p$
where $x \ne -1$ and $x \ne -p$.
Then:

$\size x \divides x \divides p$
and so $\size x$ is therefore a positive integer other than $1$ and $p$ that divides $p$.
This is a contradiction of the condition for $p$ to be prime.
So $-1$ and $-p$ are the only negative integers that divide $p$.
It follows that $p$ has exactly those four divisors.
$\Box$


Sufficient Condition
Suppose $p$ has the divisors $1, -1, p, -p$.
It follows that $1$ and $p$ are the only positive integers that divide $p$.
Thus $p$ has exactly two divisors which are positive integers.
$\blacksquare$


Definition 1 iff Definition 3
This is proved in Divisor Count Function of Prime Number:

Necessary Condition
Let $p$ be a prime number.
Then, by definition, the only positive divisors of $p$ are $1$ and $p$.
Hence by definition of the divisor count function:

$\map {\sigma_0} p = 2$
$\Box$


Sufficient Condition
Suppose $\map {\sigma_0} p = 2$.
Then by One Divides all Integers we have:

$1 \divides p$
Also, by Integer Divides Itself we have:

$p \divides p$
So if $p > 1$ it follows that $\map {\sigma_0} p \ge 2$.
Now for $\map {\sigma_0} p = 2$ it must follow that the only divisors of $p$ are $1$ and $p$.
That is, that $p$ is a prime number.
$\blacksquare$


Definition 1 iff Definition 4
From these two results:

$1$ Divides all Integers
Integer Divides Itself
it follows that if $p$ has exactly two positive integer divisors then those are $1$ and $p$.
By the same coin, if the only positive integer divisors of $p$ are $1$ and $p$, then $p$ has exactly two positive integer divisors.
$\blacksquare$


Definition 4 iff Definition 5
Let the only two positive integer divisors of $p$ be $1$ and $p$.
Then the only divisor of $p$ strictly less than $p$ is $1$.

Conversely, let the only divisor of $p$ strictly less than $p$ be $1$
From Integer Divides Itself we also have that $p$ is a divisor of $p$.
From Absolute Value of Integer is not less than Divisors it follows that any positive integer greater than $p$ is not a divisor of $p$.
Thus the only positive integer divisors of $p$ are $1$ and $p$.
$\blacksquare$


Definition 2 iff Definition 6
This is proved in Prime iff Equal to Product.
$\blacksquare$


Definition 4 iff Definition 7
Let the only two positive integer divisors of $p$ be $1$ and $p$.
Then the only positive integer less than $p$ which divisors of $p$ is $1$
So if $a b = p$ then either $a$ or $b$ is $p$ and so it is not the case that both $a$ and $b$ are less than $p$.

Now suppose that there do not exist $a$ and $b$ less than $p$ such that $a b = p$.
Suppose $a \divides p$ such that $a < p$.
That means that $\exists b \in \Z_{>0}: a b = p$.
That means $b \divides p$.
But $b \not < p$ by hypothesis.
It follows that $b = p$ and so $a = 1$
Hence $1$ and $p$ are the only positive integer divisors of $p$.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.2$: More about Numbers: Irrationals, Perfect Numbers and Mersenne Primes: Footnote $1$




