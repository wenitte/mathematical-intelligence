# 

Source: https://proofwiki.org/wiki/Peak_Point_Lemma

  This article was Featured Proof between 28 August 2009 and 3 October 2009.


Theorem
Let $\sequence {x_n}$ be a sequence in $\R$ which is infinite.

Then $\sequence {x_n}$ has an infinite subsequence which is monotone.


Proof 1
There are $2$ cases to consider.

First, suppose that every set $\set {x_n: n > N}$ has a maximum.
If this is the case, we can find a sequence $n_r \in \N$ such that:

$\ds x_{n_1} = \max \set {x_n: n > 1}$
$\ds x_{n_2} = \max \set {x_n: n > n_1}$
$\ds x_{n_3} = \max \set {x_n: n > n_2}$
and so on.

From the method of construction, $n_1 < n_2 < n_3 < \cdots$, so at each stage we are taking the maximum of a subset of the previous set.
At each stage, the previous maximum has already been taken as the previous term in the sequence.
Thus, $\sequence {x_{n_r} }$ is a decreasing subsequence of $\sequence {x_n}$.
$\Box$

Second, suppose it is not true that every set $\set {x_n: n > N}$ has a maximum.
Then there will exist some $N_1$ such that $\set {x_n: n > N_1}$ has no maximum.
So it follows that, given some $x_m$ with $m > N_1$, we can find an $x_n$ following that $x_m$ such that $x_n > x_m$.
(Otherwise, the biggest of $x_{N_1 + 1}, \ldots, x_m$ would be a maximum for $\set {x_n: n > N_1}$.)

So, we define $x_{n_1} = x_{N_1 + 1}$.
Then $x_{n_2}$ can be the first term after $x_{n_1}$ such that $x_{n_2} > x_{n_1}$.
Then $x_{n_3}$ can be the first term after $x_{n_2}$ such that $x_{n_3} > x_{n_2}$.
And so on.
Thus we get an increasing subsequence of $\sequence {x_n}$.
$\Box$

There exist only these two possibilities.
From each one we get a subsequence that is monotone:

one is decreasing
one is increasing.

We can of course choose instead to investigate whether every set $\set {x_n: n > N}$ has a minimum.
The same conclusion will be reached.
$\blacksquare$


Proof 2
A coastal town in Spain has an infinite row of hotels along a road leading down to the beach.
The tourist bureau which rates these hotels has a special designation for any hotel having a view of the sea.
Any hotel which is at least as tall as the rest of the hotels on the road to the sea receives this view-rating.
Starting with the hotel farthest from the sea, let $x_1, x_2, \ldots$ denote the heights of the hotels as we travel along the road to the beach.

One possibility is that an infinite number of hotels are view-rated.
In this case the heights of these hotels form a decreasing (i.e. nonincreasing) subsequence of the original sequence of heights.

The other possibility is that only a finite number of hotels are view-rated.
In this case we can obtain an increasing subsequence as follows.
Walk along the road to the beach past all the view-rated hotels.
Let $n_1$ be the index of the next hotel.
Since it does not have a view of the sea, there is a taller hotel nearer the shore which blocks the view.
Let $n_2$ be the index of that taller hotel.
Since it is not view-rated, it does not have a view of the sea.
Thus there must be an even taller hotel nearer the shore which blocks the view.
In this way we generate a list of indices $n_1 < n_2 < n_3 \cdots$ of taller and taller hotels.
This gives an increasing subsequence $x_{n_1}, x_{n_2}, x_{n_3}, \ldots$ of the original sequence.
$\blacksquare$


Also known as
This result is also known as the Spanish hotel theorem, as is apparent from proof 2.





