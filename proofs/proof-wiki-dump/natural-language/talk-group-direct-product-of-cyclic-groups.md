# 

Source: https://proofwiki.org/wiki/Talk:Group_Direct_Product_of_Cyclic_Groups

Any objections to changing this to an "iff" statement? --Linus44 (talk) 13:28, 11 May 2013 (UTC)

Yes because the reverse does not necessarily hold, from what I understand. I think that a group of order 21 is not cyclic. I may be wrong, I need to go check. --prime mover (talk) 14:25, 11 May 2013 (UTC)
Sorru, I'm talking complete rubbish there. Let me go away and think what I'm saying. --prime mover (talk) 14:27, 11 May 2013 (UTC)
... What actual statement are you proposing? Where does the "iff" come in? --prime mover (talk) 14:31, 11 May 2013 (UTC)
As follows:

Theorem
Let $G$ and $H$ both be finite cyclic groups.
Let $g = |G|, h=|H|$ be their respective orders.
Then their group direct product $G \times H$ is cyclic if and only if $g$ and $h$ are coprime, i.e. $g \perp h$.

Proof
$\Leftarrow$: already done.
$\Rightarrow$: Let $(x,y)$ generate $G \times H$.
Then $x$ generates $G$ and $y$ generates $H$, so $|x| = g$, $|y| = h$.
By Order of Group Element in Group Direct Product, $gh = |(x,y)| = \operatorname{lcm}(|x|,|y|)$.
Therefore we have $gh = \operatorname{lcm}(g,h)$ and therefore $\gcd(g,h) = 1$ by Product of GCD and LCM.
$\blacksquare$
I propose the change in part because I couldn't figure out how to name the converse in relation to this result. --Linus44 (talk) 15:04, 11 May 2013 (UTC)

O yes of course. Makes sense. I was getting confused with non-cyclic groups and other irrelevant stuff. Go for it. --prime mover (talk) 16:48, 11 May 2013 (UTC)
There is a notation inconsistency on this page. Which pair of letters are better to denote orders: g and h or n and m? --BlackSquare (talk) 15:34, 17 September 2022 (UTC)doesnt really matter

Add a generalization to $n$ groups
We can add generalize the theorem to that if a cyclic group is the direct product of $n$ groups then all are cyclic.

A product $G=C_{n_1} \times \cdots \times C_{n_r}$ is not cyclic unless $n_1, \ldots, n_r$ are coprime.

The direction we need is $\Leftarrow$.

Proof of $\Leftarrow$: every element in this group has order dividing the lowest common multiple $\left[n_1, \ldots, n_r\right]$, which is strictly smaller than $\# G$.
Then we can cite the theorem in Cyclicity Condition for Units of Ring of Integers Modulo n. --Hbghlyj (talk) 13:34, 17 March 2024 (UTC)





