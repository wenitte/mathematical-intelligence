# 

Source: https://proofwiki.org/wiki/Ladies%27_Diary/Dutchmen%27s_Three_Wives


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Puzzle
There came $3$ dutchmen of my acquaintance to see me, being lately married;
they brought their wives with them.
The men's names were Hendrick, Claas, and Cornelius;
the women's Geertrick, Catriin, and Anna;
but I forget the name of each man's wife.
They told me that they had been at market, to buy hogs;
each person bought as many hogs as they gave shillings for each hog;
Hendrick bought $23$ hogs more than Catriin,
and Claas bought $11$ more than Geertrick;
likewise, each man laid out $3$ guineas more than his wife.
I desire to know the name of each man's wife.


Solution
Note that a guinea is $21$ shillings.

Hendrick bought $32$ hogs and his wife Anna bought $31$
Claas bought $12$ hogs and his wife Catriin bought $9$
Cornelius bought $8$ hogs and his wife Geertrick bought $1$.


Proof 1
Let the number of hogs bought by any one of the women be $x$.
Let the number of hogs bought by her husband be $x + n$.
Then:

the money paid by the woman is $x^2$ shillings
the money paid by her husband is $\paren {x + n}^2$ shillings
There are $21$ shillings to the guinea, so:

$\paren {x + n}^2 = x^2 + 63$
and so:

$x = \dfrac {63 - n^2} {2 n}$
We see that in order for $x$ to be an integer it is necessary for $n$ to be odd.

Now we can plug various values of $n$ and see where this gets us.
It turns out by trying various $n$ that $3$ such values work, as follows:
If $n = 1$ then $x = 31$ and $x + n = 32$
If $n = 3$ then $x = 9$ and $x + n = 12$
If $n = 7$ then $x = 1$ and $x + n = 8$.
Now we can see that:

Hendrick bought $32$ hogs and Catriin bought $9$ hogs
Claas bought $12$ hogs and Geertrick bought $1$ hog
and the allocation of men with their wives then becomes apparent.
$\blacksquare$


Proof 2
It is immediate from the last condition that each man paid $63$ shillings more than his wife.
It is also immediate from the first condition that the amount paid for the hogs by each person is a square number.
So we are looking for pairs of square numbers which differ by $63$.
This leads us to the pairs:

$\tuple {1^2, 8^2}$, that is $\tuple {1, 64}$
$\tuple {9^2, 12^2}$, that is $\tuple {81, 144}$
$\tuple {31^2, 32^2}$, that is $\tuple {961, 1024}$
The relations between Hendrick and Catriin, and Claas and Geertrick, provide us with the information we need to match husband and wife for all three.
$\blacksquare$


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Ladies' Diary or Woman's Almanac, $\text {1704}$ – $\text {1841}$: $141$




