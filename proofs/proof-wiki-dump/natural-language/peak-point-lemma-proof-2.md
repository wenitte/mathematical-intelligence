# 

Source: https://proofwiki.org/wiki/Peak_Point_Lemma/Proof_2



Theorem
Let $\sequence {x_n}$ be a sequence in $\R$ which is infinite.

Then $\sequence {x_n}$ has an infinite subsequence which is monotone.


Proof
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
This result is also known as the Spanish hotel theorem.


Sources
2006: Robert Messer and Philip Straffin: Topology Now!: $\S 5.9$
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




