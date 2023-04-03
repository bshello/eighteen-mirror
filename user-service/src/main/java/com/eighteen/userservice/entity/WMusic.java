package com.eighteen.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "w_music")
public class WMusic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "w_music_id")
    private Integer wReccId;

    @ManyToOne
    @JoinColumn(name = "weather_id")
    private Weather weather;

    @ManyToOne
    @JoinColumn(name = "music_id")
    private Music music;

    @Column(name = "popularity")
    private Integer popularity;
}
