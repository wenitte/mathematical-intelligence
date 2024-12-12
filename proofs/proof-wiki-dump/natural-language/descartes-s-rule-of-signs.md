# 

Source: https://proofwiki.org/wiki/Descartes%27s_Rule_of_Signs



Theorem
Let $\map f x$ be a polynomial equation over the real numbers:

$a_n x^n + a_{n - 1} x^{n - 1} + \cdots + a_1 x + a_0 = 0$
where $a_j \in \R$. 
Let $s_n$ be the number of variations in sign of $\map f x$.
Let $p_n$ be the number of positive real roots of $\map f x$ (counted with multiplicity). 

Then:

$\forall n \in \Z_{>0}: s_n - p_n$ is a nonnegative even integer.

That is:

for every polynomial of degree $1$ or higher, the number of sign changes less than the number of positive real roots will be a nonnegative even integer.



This article is complete as far as it goes, but it could do with expansion.In particular: Expand the theorem for the count of the negative roots by replacing $x$ with $-x$ throughout, as seen in Descartes's Rule of Signs/Original Statement/Negative RootsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Original Statement
Descartes's Rule of Signs was originally stated in the following form:
Let $\map f x$ be a polynomial equation over the real numbers:

$a_n x^n + a_{n - 1} x^{n - 1} + \cdots + a_1 x + a_0 = 0$
where $a_j \in \R$.
The number of positive real roots of $\map f x$ cannot be greater than the number of variations in sign of $\map f x$ (although it may be fewer).


Proof
The proof proceeds by induction.

For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:
$s_n - p_n = 2 r$ where $r \in \Z_{\ge 0}$


Basis for the Induction
Let:

$\map f x = a_1 x + a_0$
Then:

$x_0 = -\dfrac {a_0} {a_1}$

If $a_1$ and $a_0$ are of opposite signs, then the root is positive

$\map P 1 = s_1 - p_1 = 1 - 1 = 0$
If $a_1$ and $a_0$ are of the same sign, then the root is negative

$\map P 1 = s_1 - p_1 = 0 - 0 = 0$

Therefore:

$s_1 - p_1 = 0$
and it is seen that $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that if $\map P n$ is true, then $\map P {n + 1}$ is also true.

So this is our induction hypothesis:

$s_n - p_n = 2 r$ for some $r \in \Z_{\ge 0}$
from which we are to show:

$s_{n + 1} - p_{n + 1} = 2 s$ for some $s \in \Z_{\ge 0}$


Induction Step

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Lots of repetition of the same wordsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This is our induction step:
Assume $\map P n$ is true:

$\exists r \in \Z_{\ge 0}: s_n - p_n = 2 r$

There are only two possibilities:

$(1): \quad$ both $ s_n$ and $p_n$ are even
or:

$(2): \quad$ both $ s_n$ and $p_n$ are odd.

If $s_n$ and $p_n$ are both even, then this implies that both $a_n$ and $a_0$ are either both positive or both negative.
The reason $s_n$ must be even when the first and last terms are the same sign is that sign changes must come in pairs to ensure the first and last terms have the same sign.
In order to start and end at the same sign means each sign change to the opposite sign requires a return trip back to the same sign.

The reason $p_n$ must be even when the first and last terms are the same sign can readily be understood by comparing the value of the polynomial at $0$ and at $\infty$. 
Without loss of generality, let us assume that both $a_n$ and $a_0$ are positive.
In this case, both $\map f 0 > 0$ and $\map f \infty > 0$. 
It follows that:

either there are $0$ roots
or there are an even number of roots, because the polynomial starts and ends positive and every trip below the $x$-axis would require a return trip above it.
The same argument holds if $a_n$ and $a_0$ are both negative.

If $ s_n$ and $p_n$ are both odd, then this implies that $a_n$ and $a_0$ have opposite signs.
The reason $s_n$ must be odd when the first and last terms have different signs is that sign changes must come in pairs in order to start and end at the same signs. 
In this instance, we would need one more than an even number of sign changes to start and end at different signs.

The reason $p_n$ must be odd when the first and last terms are different signs can readily be understood by comparing the value of the polynomial at $0$ and at $\infty$. 
Without loss of generality, let us assume that $a_n > 0$ and $a_0 < 0$.
In this case, $\map f 0 < 0$ and $\map f \infty > 0$. 
It follows that there is either $1$ root or an odd number of roots.
This is because:

the polynomial starts negative and ends positive
every trip below the $x$-axis would require a return trip above it.
The same argument holds if $a_n < 0$ and $a_0 > 0$.

We have now established:

$(1): \quad$ If $s_n$ and $p_n$ are both even, then this implies that $a_n$ and $a_0$ have the same sign
and:

$(2): \quad$ If $s_n$ and $p_n$ are both odd, then this implies that $a_n$ and $a_0$ have opposite signs.

Let us now explore what happens when we add $a_{n + 1} x^{n + 1}$, $\paren {a_{n + 1} \ne 0}$ to our polynomial of degree $n$.
Our new polynomial is:

$\map f x = a_{n + 1} x^{n + 1} + a_n x^n + a_{n - 1} x^{n - 1} + \cdots + a_1 x + a_0$

Case $1$: $ s_n$ and $p_n$ are both even, so $a_n$ and $a_0$ have the same sign

There are $4$ possibilities:

$(1): \quad a_n$ and $a_0$ are positive and $a_{n + 1}$ is positive
In this case, $s_{n + 1}$ and $p_{n + 1}$ both remain even.
There are the exact same number of sign changes as $s_n$.
Because the first and last term have the same sign, we have established that there are an even number of roots.


$(2): \quad a_n$ and $a_0$ are positive and $a_{n + 1}$ is negative
In this case, $s_{n + 1}$ and $p_{n + 1}$ both turn odd.
We have now added $1$ additional sign change from $s_n$.
Because the first and last term have different signs, we have established that there are an odd number of roots.


$(3): \quad a_n$ and $a_0$ are negative and $a_{n + 1}$ is positive
In this case, $s_{n + 1}$ and $p_{n + 1}$ both turn odd.
We have now added $1$ additional sign change from $s_n$.
Because the first and last term have different signs, we have established that there are an odd number of roots.


$(4): \quad a_n$ and $a_0$ are negative and $a_{n + 1}$ is negative
In this case, $s_{n + 1}$ and $p_{n + 1}$ both remain even.
There are the exact same number of sign changes as $s_n$.
Because the first and last term have the same sign, we have established that there are an even number of roots.

Case $2$: $ s_n$ and $p_n$ are both odd, so $a_n$ and $a_0$ have different signs

There are $4$ possibilities:

$(1): \quad a_n$ is positive, $a_0$ is negative and $a_{n + 1}$ is positive
In this case, $s_{n + 1}$ and $p_{n + 1}$ both remain odd.
There are the exact same number of sign changes as $s_n$..
Because the first and last term have different signs, we have established that there are an odd number of roots.


$(2): \quad a_n$ is positive, $a_0$ is negative and $a_{n + 1}$ is negative
In this case, $s_{n + 1}$ and $p_{n + 1}$ both turn even.
We have now added $1$ additional sign change from $s_n$.
Because the first and last term have the same signs, we have established that there are an even number of roots.


$(3): \quad a_n$ is negative, $a_0$ is positive and $a_{n + 1}$ is positive
In this case, $s_{n + 1}$ and $p_{n + 1}$ both turn even.
We have now added $1$ additional sign change from $s_n$.
Because the first and last term have the same signs, we have established that there are an even number of roots.


$(4): \quad a_n$ is negative, $a_0$ is positive and $a_{n + 1}$ is negative
In this case, $s_{n + 1}$ and $p_{n + 1}$ both remain odd.
There are the exact same number of sign changes as $s_n$.
Because the first and last term have different signs, we have established that there are an odd number of roots.

We have now established that:

$s_{n + 1} - p_{n + 1} = 2 s$ where $s \in \Z$.
That is, $\map P {n + 1}$ is true
Our final task is to demonstrate that:

$\forall n \in \Z_{>0}: s_n \ge p_n$

Note that the derivative $\map {f'} x$ is an $\paren {n - 1}$-degree polynomial.
Let $s'$ be the number of its sign changes.
Let $p'$ be the number of its positive roots.

Since $\map f x$ and $\map {f'} x$ have the same sign for each of their terms besides $a_0$, we have:

$s \ge s'$
If $\map f x$ has p positive roots, then by Rolle's Theorem $\map {f'} x$ has at least $p - 1$ positive roots. 
So:

$s - p \ge -1$
but since $s - p$ is an even integer, we obtain:

$s \ge p$

We have now established $\map P {n + 1}$:

$s_{n + 1} - p_{n + 1} = 2 s$ where $s \in \Z_{\ge 0}$

The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Examples
Arbitrary Example
Consider the polynomial equation $\map f x$ over real numbers:

$x^5 + x^4 - 2 x^3 + x^2 - 1 = 0$
This has three variations in sign:

from $x^4$ to $-2 x^3$, where it goes from positive to negative
from $-2 x^3$ to $x^2$, where it goes from negative to positive
from $x^2$ to $-1$, where it goes from positive to negative.
Hence $\map f x$ has no more than $3$ positive real roots.

Replacing $x$ with $-x$ in $\map f x$ gives us the polynomial equation $\map {f'} x$:

$-x^5 + x^4 + 2 x^3 + x^2 - 1 = 0$
This has two variations in sign:

from $-x^5$ to $x^4$, where it goes from negative to positive
from $x^2$ to $-1$, where it goes from positive to negative.
Hence $\map f x$ has no more than $2$ negative real roots.


Also known as
Descartes's Rule of Signs is also known as just the Rule of Signs.


Source of Name
This entry was named for René Descartes.





